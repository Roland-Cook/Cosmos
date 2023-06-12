from django.urls import path
from planet.views import view_planets, planet_detail, create_planet

urlpatterns = [
    path("planets_view/", view_planets, name="planets_view"),
    path("planets_detail/<int:id>/", planet_detail, name="planet_detail"),
    path("planets/create/", create_planet, name="planet_create" )
]
