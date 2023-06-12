from django.forms import ModelForm
from planet.models import Planet



class PlanetForm(ModelForm):
    class Meta:
        model = Planet
        fields = [
            "name",
            "image",
            "description",
            "discovered_by"
        ]

        
