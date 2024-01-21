from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import Group, Permission
from django.contrib.auth.models import PermissionsMixin
from django.utils.translation import gettext_lazy as _
from django.db import models


class UserModel(models.Model):
    """User model"""
    email = models.EmailField(max_length=255, unique=True, blank=False, null=False)
    uid = models.CharField(primary_key=True, max_length=255, unique=True, blank=False, null=False)
    name = models.CharField(max_length=255, blank=True, null=True)
    profile_picture = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.uid