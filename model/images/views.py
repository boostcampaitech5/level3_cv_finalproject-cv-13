from rest_framework.decorators import api_view
from rest_framework.response import Response
from PIL import Image
import base64

@api_view(['POST'])
def process(request):
    """Get Imaage from main backend and Send PCD to main backend

    Args:
        request: Request from main backend [png, jpg]
    Returns:
        temp -> messages
    """

    with open('temp_img.png', 'wb') as f:
        f.write(base64.b64decode(request.data['img']))

    return Response({"message": "this is POST"})