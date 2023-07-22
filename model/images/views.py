from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
from PIL import Image
import base64
from inference import preprocess
import requests

@api_view(['POST'])
def process(request):
    """Get Imaage from main backend and Send PCD to main backend

    Args:
        request: Request from main backend [png, jpg]
    Returns:
        temp -> messages
    """

    seed = request.data[seed]
    print(seed)
    with open(f'./inference/data/temp_img_{seed}.png', 'wb') as f:
        f.write(base64.b64decode(request.data['img']))

    preprocess.run_main(seed)

    with open(f'./inference/result/depth/temp_img_{seed}.depth.png', 'rb') as f:
        base64_depth = base64.b64encode(f.read())
    
    with open(f'./inference/result/pcd/temp_img_{seed}.pcd', 'rb') as f:
        base64_pcd = base64.b64encode(f.read())

    central_url = 'http://34.64.255.206:8000/images/result/'
    # central_url = 'http://127.0.0.1:8000/images/result/'
    
    data = {
        'depth': base64_depth,
        'pcd': base64_pcd,
    }

    res = requests.post(central_url, data=data)
    print(res)

    return HttpResponse(status=200)