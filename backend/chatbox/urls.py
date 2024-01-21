from django.urls import path
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()

router.register('room', RoomViewSet, basename='room')
router.register('message', MessageViewSet, basename='message')

urlpatterns = router.urls