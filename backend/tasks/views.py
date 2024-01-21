from django.shortcuts import render
from rest_framework import viewsets, filters
from .models import Task
from .serializers import TaskSerializer

# Create your views here.

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['user__uid']