from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
from PIL import Image
import base64

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
    
    print(request.FILES['img'])
    
    with open(request.FILES['img'], 'rb') as f: 
        base64_img = base64.b64encode(f.read())

    ai_url = 'http://118.67.131.164:40002/images/process/'
    ai_img = {
        'img' : base64_img
    }

    res = requests.post(ai_url, data=ai_img)

    print(res)

    return Response({"message": "this is POST"})