from django.contrib import admin
from planet.models import Planet
# Register your models here.


@admin.register(Planet)
class PlanetAdmin(admin.ModelAdmin):
    list_display = ["name"]
