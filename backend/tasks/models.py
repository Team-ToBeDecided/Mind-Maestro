from django.db import models
from django.utils import timezone
from datetime import datetime, timedelta
from django.db.models import F

# Create your models here.

DIFFICULTY_CHOICES = [
    ('easy', 'easy'),
    ('medium', 'medium'),
    ('hard', 'hard'),
]

MAX_POINTS = {
    'easy': 200,
    'medium': 400,
    'hard': 500,
}

class Task(models.Model):
    user = models.ForeignKey('userauth.UserModel', on_delete=models.CASCADE, to_field='uid')
    title = models.CharField(max_length=255)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    difficulty = models.CharField(max_length=20, choices=DIFFICULTY_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    completed_at = models.DateTimeField(auto_now=True)

    points = models.IntegerField(default=0, editable=False)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs) # Call the original save() method first

    def update_points(self):
        # Get the current time, making it timezone aware
        now = datetime.now(tz=self.created_at.tzinfo)

        # Calculate the difference in minutes
        difference = now - self.created_at
        minutes = difference.total_seconds() / 6

        # Calculate the points based on the level of difficulty
        if self.difficulty == 'easy':
            points = int(minutes * 2)
        elif self.difficulty == 'medium':
            points = int(minutes * 3)
        else: # hard
            points = int(minutes * 4)

        # Ensure points do not exceed the maximum for the level of difficulty
        points = min(points, MAX_POINTS[self.difficulty])

        # Update the points field
        self.points = points
        self.save(update_fields=['points'])

    # def calculate_points(self):
    #     # This method calculates points based on the time taken and difficulty
    #     if self.completed_at and self.created_at:
    #         time_taken = self.completed_at - self.created_at
    #         if self.difficulty == 'easy':
    #             # Set a cap for Easy difficulty
    #             points = min(time_taken.seconds // 60, 10)  # Example cap: 10 points
    #         elif self.difficulty == 'medium':
    #             # Set a cap for Medium difficulty
    #             points = min(time_taken.seconds // 30, 20)  # Example cap: 20 points
    #         elif self.difficulty == 'hard':
    #             # Set a cap for Hard difficulty
    #             points = min(time_taken.seconds // 10, 30)  # Example cap: 30 points
    #         else:
    #             points = 0
    #         return points
    #     return 0

    # def save(self, *args, **kwargs):
    #     # Fetch the current completed_at from the database if this is an existing instance
    #     if self.pk:
    #         old_completed_at = Task.objects.filter(pk=self.pk).values_list('completed_at', flat=True).first()
    #     else:
    #         old_completed_at = None

    #     # Check if completed_at has changed or if this is a new instance being marked as completed
    #     if self.completed and (self.completed_at != old_completed_at or self.pk is None):
    #         if not self.completed_at:
    #             self.completed_at = timezone.now()
    #         self.points = self.calculate_points()

    #     # Call the "real" save() method
    #     super().save(*args, **kwargs)

# class Points(models.Model):
#     user = models.ForeignKey('userauth.UserModel', on_delete=models.CASCADE, to_field='uid')
#     points = models.IntegerField(default=0, editable=False)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)