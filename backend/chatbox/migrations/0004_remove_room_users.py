# Generated by Django 5.0.1 on 2024-01-21 10:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chatbox', '0003_alter_message_user_alter_room_users'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='room',
            name='users',
        ),
    ]
