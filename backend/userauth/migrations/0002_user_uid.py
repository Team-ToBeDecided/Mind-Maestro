# Generated by Django 5.0.1 on 2024-01-20 19:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userauth', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='uid',
            field=models.CharField(blank=True, max_length=250, null=True, unique=True),
        ),
    ]