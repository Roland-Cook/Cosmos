from django.forms import ModelForm
from planet.models import Planet, PlanetSystem
from django import forms



class PlanetForm(ModelForm):
    class Meta:
        model = Planet
        fields = [
            "name",
            "image",
            "description",
            "discovered_by",
            "systems"
        ]


class SystemForm(ModelForm):
    class Meta:
        model = PlanetSystem
        fields = [
            "name",
            "image",
            "description"
        ]


class EditPlanetForm(ModelForm):
    class Meta:
        model=Planet
        fields=[
            "name",
            "image",
            "description",
            "discovered_by",
            "systems"
        ]





class LoginForm(forms.Form):
    username = forms.CharField(max_length=150)
    password = forms.CharField(max_length=150, widget=forms.PasswordInput)
        
class SignUpForm(forms.Form):
    username = forms.CharField(max_length=150)
    password = forms.CharField(max_length=150, widget=forms.PasswordInput)
    password_confirmation = forms.CharField(
        max_length=150, widget=forms.PasswordInput
    )
