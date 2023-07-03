from rest_framework.decorators import api_view
from rest_framework.response import Response

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
    return Response({"message": "this is POST"})