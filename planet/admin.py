from django.contrib import admin
from planet.models import Planet, PlanetSystem
# Register your models here.


@admin.register(Planet)
class PlanetAdmin(admin.ModelAdmin):
    list_display = ["name"]


@admin.register(PlanetSystem)
class SystemAdmin(admin.ModelAdmin):
    list_display = ["name"]
