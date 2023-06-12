from django.db import models

# Create your models here.

class PlanetSystem(models.Model):
    name = models.CharField(max_length=100)
    image = models.URLField(default=True)



class Planet(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.URLField()
    discovered_by = models.CharField(max_length=100)
    planets = models.ForeignKey(PlanetSystem, related_name="planets", on_delete=models.CASCADE, default=True)
