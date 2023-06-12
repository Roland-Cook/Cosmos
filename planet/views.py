from django.shortcuts import render, get_object_or_404, redirect, get_list_or_404
from planet.models import Planet, PlanetSystem
from planet.forms import PlanetForm, LoginForm, SignUpForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.models import User


# Create your views here.


def view_planets(request):
    planets = Planet.objects.all()
    context = {
        "planets" : planets
    }
    return render(request, "planet/planets.html", context)


def planet_detail(request,id):
    planet=get_object_or_404(Planet.objects,id=id)
    context={
        "planet" : planet
    }
    return render(request, "planet/planet_detail.html", context)

@login_required
def create_planet(request):
    if request.method=="POST":
        form = PlanetForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("planets_view")
    else:
        form = PlanetForm()
    context={
        "form":form
            }
    return render(request,"planet/create_planet.html",context)   


def user_login(request):
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            username = request.POST["username"]
            password = request.POST["password"]
            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return redirect("planets_view")
    else:
        form = LoginForm()
    context = {"form": form}
    return render(request, "planet/login.html", context)


def user_logout(request):
    logout(request)
    return redirect("planets_view")


def user_signup(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data["username"]
            password = form.cleaned_data["password"]
            password_confirmation = form.cleaned_data["password_confirmation"]

            if password == password_confirmation:
                user = User.objects.create_user(username, password)
                login(request, user)
                return redirect("planets_view")
            else:
                form.add_error("password", "Passwords do not match")
    else:
        form = SignUpForm()
    context = {"form": form}
    return render(request, "planet/signup.html", context)


def planet_system(request,id):
    system = get_object_or_404(PlanetSystem.objects,id=id)
    context = {
        "system" : system
    }
    return render(request, "planet/planet_systems.html", context)

def all_systems(request):
    all_systems = PlanetSystem.objects.all()
    context = {
        "systems" : all_systems
    }
    return render(request, "planet/all_systems.html", context)
