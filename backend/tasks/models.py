from django.db import models

# Create your models here.

DIFFICULTY_CHOICES = (
    ('easy', 'Easy'),
    ('medium', 'Medium'),
    ('hard', 'Hard'),
)

class Task(models.Model):
    user = models.ForeignKey('userauth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    difficulty = models.Choices(DIFFICULTY_CHOICES, default='easy')
    created_at = models.DateTimeField(auto_now_add=True)
    completed_at = models.DateTimeField(auto_now=True)
    points = models.IntegerField(default=0)