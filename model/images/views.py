from rest_framework.decorators import api_view
from rest_framework.response import Response
from PIL import Image

@api_view(['GET', 'POST'])
def process(request):
    """Temp
    """

    if request.method == 'GET':
        return Response({"message": "this is GET"})
    return Response({"message": "this is POST"})