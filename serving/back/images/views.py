from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
import requests
from PIL import Image
import base64
from django.http import FileResponse

@api_view(['GET', 'POST'])
def process(request):
    """Get and Send Images between front and back

    Args:
        request: Request from front
    Returns:
        temp -> messages
    """

    if request.method == 'GET':
        return Response({"message": "this is GET"})
    
    img_file = Image.open(request.FILES['img'])
    img_file.save('temp_img.png', 'png')

    with open('temp_img.png', 'rb') as f: 
        base64_img = base64.b64encode(f.read())
    
    # base64_img = repr(base64_img)

    ai_url = 'http://118.67.131.164:40002/images/process/'
    # ai_url = 'http://127.0.0.1:40002/images/process/'

    ai_img = {
        'img' : base64_img
    }

    res = requests.post(ai_url, data=ai_img)

    print(res)

    return HttpResponse(status=200)

@api_view(['POST'])
def result(request):
    """Get Images from ai backend

    Args:
        request: request from ai backend
    Returns:
        temp -> messages
    """

    with open('temp_depth.png', 'wb') as f:
        f.write(base64.b64decode(request.data['depth']))
    
    with open('temp_pcd.pcd', 'wb') as f:
        f.write(base64.b64decode(request.data['pcd']))
    
    return HttpResponse(status=200)

@api_view(['GET'])
def send_depth(request):
    response = FileResponse(open("temp_depth.png", "rb"))
    return response

def send_pcd(reqeust):
    response = FileResponse(open("temp_pcd.pcd", "rb"))
    return response
