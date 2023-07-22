from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
import requests
from PIL import Image
import base64
from django.http import FileResponse
import random

@api_view(['POST'])
def process(request):
    seed = random.randint(0, 1e10)
    temp_img_path = f'temp_imgs/temp_img_{seed}.png'
    print(f'seed: {seed}, path: {temp_img_path}')

    """Get and Send Images between front and back

    Args:
        request: Request from front
    Returns:
        temp -> messages
    """
    
    img_file = Image.open(request.FILES['img'])
    img_file.save(temp_img_path, 'png')

    with open(temp_img_path, 'rb') as f: 
        base64_img = base64.b64encode(f.read())
    
    # base64_img = repr(base64_img)

    ai_url = 'http://118.67.131.164:40002/images/process/'
    # ai_url = 'http://127.0.0.1:40002/images/process/'

    ai_img = {
        'img' : base64_img,
        'seed' : seed,
    }
    front_res = {
        'seed': seed
    }
    res = requests.post(ai_url, data=ai_img)

    print(res)

    return Response(front_res)

@api_view(['POST'])
def result(request):
    """Get Images from ai backend

    Args:
        request: request from ai backend
    Returns:
        temp -> messages
    """
    seed = request.data[seed]

    temp_depth_path = f'img_dir/temp_depth_{seed}.png'
    temp_pcd_path = f'img_dir/temp_pcd_{seed}.pcd'

    with open(temp_depth_path, 'wb') as f:
        f.write(base64.b64decode(request.data['depth']))
        print(f'create file at {temp_depth_path}')

    with open(temp_pcd_path, 'wb') as f:
        f.write(base64.b64decode(request.data['pcd']))
        print(f'create file at {temp_pcd_path}')

    return HttpResponse(status=200)

@api_view(['GET'])
def send_depth(request):
    # response = FileResponse(open("temp_depth.png", "rb"))
    return HttpResponse(status=200)

def send_pcd(reqeust):
    # response = FileResponse(open("temp_pcd.pcd", "rb"))
    return HttpResponse(status=200)
