from django.db import models

# Create your models here.

class Room(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    users = models.ManyToManyField('userauth.UserModel')

class Message(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    user = models.ForeignKey('userauth.UserModel', on_delete=models.CASCADE, to_field='uid')
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)