from django.urls import path
from . import views
from rest_framework import routers

router = routers.DefaultRouter()

router.register('users', views.UserView)

urlpatterns = router.urls

