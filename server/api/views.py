from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(["GET"])
def home(request):
    data = {"text": "Hello World"}
    return Response(data)
