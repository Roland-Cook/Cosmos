from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
import json
from planet.models import Planet, PlanetSystem
from planet.forms import PlanetForm, LoginForm, SignUpForm, SystemForm, EditPlanetForm
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods
from django.contrib.auth import login, authenticate, logout
from django.views.decorators.csrf import csrf_exempt

from common.json import ModelEncoder

# Create your views here.

class SystemEncoder(ModelEncoder):
    model = PlanetSystem
    properties = ["name", "description", "image","id"]


class PlanetEncoder(ModelEncoder):
    model = Planet
    properties = ["name", "mass", "temperature", "distance", "description", "image", "discovered_by","system","id"]

    encoders = {
        "system": SystemEncoder(),
        }


# view all planets and create new planets 

@require_http_methods(["GET", "POST"])
def view_planets(request):
    if request.method == "GET":
        Planets = Planet.objects.all()
        return JsonResponse(
            {"Planets": Planets},
            encoder=PlanetEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            system = content["system"]
            system = PlanetSystem.objects.get(name=system)
            content["system"] = system
            planet = Planet.objects.create(**content)
            planet.save()
            return JsonResponse(
                planet,
                encoder=PlanetEncoder,
                safe=False
            )
        except Planet.DoesNotExist:
            return JsonResponse(
                {"message": "Cannot create planet"},
                status=400,
                )
        

# get details or delete planets based on ids

@require_http_methods(["GET", "DELETE"])
def planet_detail(request, id):
    if request.method == "GET":
        planet = Planet.objects.get(id=id)
        return JsonResponse(
            planet,
            encoder=PlanetEncoder,
            safe=False,
        )
    else:
        count, _ = Planet.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
     


@require_http_methods(["GET", "POST"])
def view_systems(request):
    if request.method == "GET":
        systems = PlanetSystem.objects.all()
        return JsonResponse(
            {"systems": systems},
            encoder=SystemEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            system = PlanetSystem.objects.create(**content)
            system.save()
            return JsonResponse(
                system,
                encoder=SystemEncoder,
                safe=False,
            )
        except PlanetSystem.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid state abbreviation"},
                status=400,
                ) 

@require_http_methods(["GET", "DELETE"])
def system_detail(request, id):
    if request.method == "GET":
        system = PlanetSystem.objects.get(id=id)
        return JsonResponse(
            system,
            encoder=SystemEncoder,
            safe=False,
        )
    else:
        count, _ = PlanetSystem.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})

# def view_planets(request):
#     planets = Planet.objects.all()
#     context = {

#         "planets" : planets
#     }
#     return render(request, "planet/planets.html", context)


# def planet_detail(request,id):
#     planet=get_object_or_404(Planet.objects,id=id)
#     context={
#         "planet" : planet
#     }
#     return render(request, "planet/planet_detail.html", context)

# @login_required
# def create_planet(request):
#     if request.method=="POST":
#         form = PlanetForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return redirect("planets_view")
#     else:
#         form = PlanetForm()
#     context={
#         "form":form
#             }
#     return render(request,"planet/create_planet.html",context)   


# def user_login(request):
#     if request.method == "POST":
#         form = LoginForm(request.POST)
#         if form.is_valid():
#             username = request.POST["username"]
#             password = request.POST["password"]
#             user = authenticate(request, username=username, password=password)

#             if user is not None:
#                 login(request, user)
#                 return redirect("planets_view")
#     else:
#         form = LoginForm()
#     context = {"form": form}
#     return render(request, "planet/login.html", context)


# def user_logout(request):
#     logout(request)
#     return redirect("planets_view")


# def user_signup(request):
#     if request.method == "POST":
#         form = SignUpForm(request.POST)
#         if form.is_valid():
#             username = form.cleaned_data["username"]
#             password = form.cleaned_data["password"]
#             password_confirmation = form.cleaned_data["password_confirmation"]

#             if password == password_confirmation:
#                 user = User.objects.create_user(username, password)
#                 login(request, user)
#                 return redirect("planets_view")
#             else:
#                 form.add_error("password", "Passwords do not match")
#     else:
#         form = SignUpForm()
#     context = {"form": form}
#     return render(request, "planet/signup.html", context)


# def planet_system(request,id):
#     system = get_object_or_404(PlanetSystem.objects,id=id)
#     context = {
#         "system" : system
#     }
#     return render(request, "planet/planet_systems.html", context)

# def all_systems(request):
#     all_systems = PlanetSystem.objects.all()
#     context = {
#         "systems" : all_systems
#     }
#     return render(request, "planet/all_systems.html", context)

# @login_required
# def create_system(request):
#     if request.method=="POST":
#         form = SystemForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return redirect("all_systems")
#     else:
#         form = SystemForm()
#     context={
#         "form":form
#             }
#     return render(request,"planet/create_system.html",context)


# @login_required
# def edit_planet(request,id):
#     post =get_object_or_404(Planet.objects,id=id)
#     if request.method == "POST":
#         form = EditPlanetForm(request.POST, instance=post)
#         if form.is_valid():
#             form.save()
#             return redirect("planet_detail",id=id)
#     else:
#         form =EditPlanetForm(instance=post)

#     context={
#         "post_object":post,
#         "post_form":form,
#     }
#     return render(request, "planet/edit_planet.html",context)

# @login_required
# def edit_system(request,id):
#     post =get_object_or_404(PlanetSystem.objects,id=id)
#     if request.method == "POST":
#         form = SystemForm(request.POST, instance=post)
#         if form.is_valid():
#             form.save()
#             return redirect("systems",id=id)
#     else:
#         form =SystemForm(instance=post)

#     context={
#         "post_object":post,
#         "post_form":form,
#     }
#     return render(request, "planet/edit_system.html",context)
