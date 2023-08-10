from django.urls import path
from planet.views import view_planets, view_systems, planet_detail, system_detail, show_system_planets
# planet_detail, create_planet, user_login, user_logout, user_signup, planet_system, all_systems, edit_planet, edit_system

urlpatterns = [
    path("planets_list/", view_planets, name="planets_view"),
    path("systems_list/", view_systems, name="create_system"),
    path("planet_detail/<str:name>/", planet_detail, name="planet_detail"),
    path("system_detail/<str:name>/", system_detail, name="system_detail"),
    path("system_planets/<str:name>/", show_system_planets, name="system_planets")
]
