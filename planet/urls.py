from django.urls import path
from planet.views import view_planets, planet_detail, create_planet, user_login, user_logout, user_signup, planet_system, all_systems, create_system, edit_planet, edit_system

urlpatterns = [
    path("planets_view/", view_planets, name="planets_view"),
    path("planets_detail/<int:id>/", planet_detail, name="planet_detail"),
    path("create/", create_planet, name="planet_create"),
    path("login/", user_login, name ="login"),
    path("logout/", user_logout, name="logout"),
    path("signup/", user_signup, name ="signup" ),
    path("systems/<int:id>/", planet_system, name="systems"),
    path("all_systems/", all_systems, name ="all_systems" ),
    path("create_system/", create_system, name="create_system"),
    path("edit/<int:id>", edit_planet, name="edit_planet"),
    path("edit_system/<int:id>", edit_system, name="edit_system")
]
