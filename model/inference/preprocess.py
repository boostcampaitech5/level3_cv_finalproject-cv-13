import os
import glob
import argparse
import numpy as np
from PIL import Image
import importlib
from tqdm import tqdm
from imageio import imread, imwrite
import torch
import open3d as o3d


os.environ['KMP_DUPLICATE_LIB_OK']='True'

from misc.pano_lsd_align import panoEdgeDetection, rotatePanorama
from lib.config import config, update_config


def get_uni_sphere_xyz(H, W):
    j, i = np.meshgrid(np.arange(H), np.arange(W), indexing='ij')
    u = (i+0.5) / W * 2 * np.pi
    v = ((j+0.5) / H - 0.5) * np.pi
    z = -np.sin(v)
    c = np.cos(v)
    y = c * np.sin(u)
    x = c * np.cos(u)
    sphere_xyz = np.stack([x, y, z], -1)
    return sphere_xyz


path = "./data/hanuryhouse.jpg"
output_dir = "./result"
q_error = 0.7
refine_iter = 3


################################### Image Align ############################################
if len(path) == 0:
    print('no images found')

# Check given path exist

assert os.path.isfile(path), '%s not found' % path

# Check target directory
if not os.path.isdir(output_dir):
    print('Output directory %s not existed. Create one.')

# Process each input
print('Processing', path, flush=True)

# Load and cat input images
img_ori = np.array(Image.open(path).resize((1024, 512), Image.BICUBIC))[..., :3]

# VP detection and line segment extraction
_, vp, _, _, panoEdge, _, _ = panoEdgeDetection(img_ori,
                                                qError=q_error,
                                                refineIter=refine_iter)
panoEdge = (panoEdge > 0)

# Align images with VP
i_img = rotatePanorama(img_ori / 255.0, vp[2::-1])
l_img = rotatePanorama(panoEdge.astype(np.float32), vp[2::-1])

# Dump results
basename = os.path.splitext(os.path.basename(path))[0]

path = os.path.join(output_dir, "aligned", '%s.png' % basename)

i_img = Image.fromarray((i_img * 255).astype(np.uint8))
i_img.save(path)

################################### Infer Depth ########################################

parser = argparse.ArgumentParser(formatter_class=argparse.ArgumentDefaultsHelpFormatter)
parser.add_argument('--cfg', default = "./config/s2d3d_depth/HOHO_depth_dct_efficienthc_TransEn1.yaml")
parser.add_argument('--pth', default = "./checkpoints/depth/depth.pth")
parser.add_argument('opts',
                        help='Modify config options using the command-line',
                        default=None, nargs=argparse.REMAINDER)

args = parser.parse_args()
update_config(config, args)

device = 'cuda' if config.cuda else 'cpu'

model_file = importlib.import_module(config.model.file)
model_class = getattr(model_file, config.model.modelclass)
net = model_class(**config.model.kwargs)
net.load_state_dict(torch.load(args.pth, map_location=device))
net = net.eval().to(device)

with torch.no_grad():
    i_img = np.asarray(i_img)
    x = torch.from_numpy(i_img).permute(2,0,1)[None].float() / 255.
    if x.shape[2:] != config.dataset.common_kwargs.hw:
        x = torch.nn.functional.interpolate(x, config.dataset.common_kwargs.hw, mode='area')
    x = x.to(device)
    pred_depth = net.infer(x)
    if not torch.is_tensor(pred_depth):
        pred_depth = pred_depth.pop('depth')

    fname = os.path.splitext(os.path.split(path)[1])[0]
    pred_depth = pred_depth.mul(1000).squeeze().cpu().numpy().astype(np.uint16)
    imwrite(os.path.join(output_dir,"depth", f'{fname}.depth.png'),pred_depth)
    
################################### depth map to PCD ##########################################

scale = 0.001
crop_ratio = 80/512
crop_z_above = 1.2
depth = pred_depth[...,None].astype(np.float32) * scale

# Project to 3d
H, W = i_img.shape[:2]
xyz = depth * get_uni_sphere_xyz(H, W)
xyzrgb = np.concatenate([xyz, i_img/255.], 2)

# Crop the image and flatten
if crop_ratio > 0:
    assert crop_ratio < 1
    crop = int(H * crop_ratio)
    xyzrgb = xyzrgb[crop:-crop]
xyzrgb = xyzrgb.reshape(-1, 6)

# Crop in 3d
# xyzrgb = xyzrgb[xyzrgb[:,2] <= crop_z_above]

# Visualize
pcd = o3d.geometry.PointCloud()
pcd.points = o3d.utility.Vector3dVector(xyzrgb[:, :3])
pcd.colors = o3d.utility.Vector3dVector(xyzrgb[:, 3:])

o3d.io.write_point_cloud(os.path.join(output_dir,"pcd", f'{fname}.pcd'),pcd)

# o3d.visualization.draw_geometries([
#     pcd,
#     o3d.geometry.TriangleMesh.create_coordinate_frame(size=0.3, origin=[0, 0, 0])
# ])