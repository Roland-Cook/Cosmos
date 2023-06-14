from django.db import models

# Create your models here.

class PlanetSystem(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500, null=True)
    image = models.URLField(default=True)

    def __str__(self):
        return self.name



class Planet(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.URLField()
    discovered_by = models.CharField(max_length=100)
    systems = models.ForeignKey(PlanetSystem, related_name="planets", on_delete=models.CASCADE, null=True)
