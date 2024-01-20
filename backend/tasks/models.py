from django.db import models

# Create your models here.

DIFFICULTY_CHOICES = [
    ('easy', 'easy'),
    ('medium', 'medium'),
    ('hard', 'hard'),
]

class Task(models.Model):
    user = models.ForeignKey('userauth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    difficulty = models.CharField(max_length=20, choices=DIFFICULTY_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    completed_at = models.DateTimeField(auto_now=True)
    expected_completion_time = models.IntegerField(null=True)
    points = models.IntegerField(default=0)