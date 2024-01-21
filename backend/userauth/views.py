from .models import UserModel
from rest_framework import status, filters
from .serializers import UserSerializer
from rest_framework import viewsets

class UserView(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['uid']