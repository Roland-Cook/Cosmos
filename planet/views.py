from django.shortcuts import render, get_object_or_404, redirect
from planet.models import Planet
from planet.forms import PlanetForm
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
