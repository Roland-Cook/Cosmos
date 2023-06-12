from django.db import models

# Create your models here.

class Planet(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.URLField()
    discovered_by = models.CharField(max_length=100)
