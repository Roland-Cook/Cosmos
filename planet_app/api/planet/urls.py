from django.urls import path
from planet.views import view_planets, view_systems, planet_detail, system_detail
# planet_detail, create_planet, user_login, user_logout, user_signup, planet_system, all_systems, edit_planet, edit_system

urlpatterns = [
    path("planets_list/", view_planets, name="planets_view"),
    path("systems_list/", view_systems, name="create_system"),
    path("planet_detail/<int:id>/", planet_detail, name="planet_detail"),
    path("system_detail/<int:id>/", system_detail, name="system_detail"),


    # path("create/", create_planet, name="planet_create"),
    # path("login/", user_login, name ="login"),
    # path("logout/", user_logout, name="logout"),
    # path("signup/", user_signup, name ="signup" ),
    # path("all_systems/", all_systems, name ="all_systems" ),
    # path("edit/<int:id>", edit_planet, name="edit_planet"),
    # path("edit_system/<int:id>", edit_system, name="edit_system"),
]
