from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
import json
from planet.models import Planet, PlanetSystem
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
            {"planets": Planets},
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

@require_http_methods(["GET", "DELETE","PUT"])
def planet_detail(request, name):
    if request.method == "GET":
        planet = Planet.objects.get(name=name)
        return JsonResponse(
            planet,
            encoder=PlanetEncoder,
            safe=False,
        )
    elif request.method=="DELETE":
        count, _ = Planet.objects.filter(name=name).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        Planet.objects.filter(name=name).update(**content)
        planet = Planet.objects.get(name=name)
        return JsonResponse(
        planet,
        encoder=PlanetEncoder,
        safe=False,
        )
        
        


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

@require_http_methods(["GET", "DELETE","PUT"])
def system_detail(request, name):
    if request.method == "GET":
        system = PlanetSystem.objects.get(name=name)
        return JsonResponse(
            system,
            encoder=SystemEncoder,
            safe=False,
        )
    elif request.method=="DELETE":
        count, _ = PlanetSystem.objects.filter(name=name).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        PlanetSystem.objects.filter(name=name).update(**content)
        system = PlanetSystem.objects.get(name=name)
        return JsonResponse(
        system,
        encoder=SystemEncoder,
        safe=False,
        )
        

## filter planets by system names
def show_system_planets(request,name):
    system_planet_list = Planet.objects.get(system__name=name)
    return JsonResponse(
        {"system_planets":system_planet_list},
        encoder=PlanetEncoder,
        safe=False,
    )
