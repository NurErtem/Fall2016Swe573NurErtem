from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics

from core import data
from core import menu
from core.models import UserProfile
from core.serializers import UserSerializer
from nutrition.models import CalorieInput, CalorieOutput


def dashboard(request):
    cards = data.get_cards()
    menu_items = menu.get_menu_items('Dashboard')

    return render(request, 'dashboard.html', {
        'menu_items': menu_items,
        'cards': cards
    })


def timeline(request):
    menu_items = menu.get_menu_items('Timeline')

    intakes = CalorieInput.objects.all()
    outtakes = CalorieOutput.objects.all()

    return render(request, 'timeline.html', {
        'menu_items': menu_items,
        'intakes': intakes,
        'outtakes': outtakes
    })


def profile(request):
    menu_items = menu.get_menu_items('Profile')

    profile = {
        'name': 'Nur',
        'surname': 'Ertem Unden',
        'email': 'ertemnur@gmail.com',
        'description': 'some description',
        'age': '32',
        'birth': '24/04/1976',
        'bmi': 0,
        'weight': 70,
        'height': 175,

    }

    return render(request, '3-userinfo.html', {
        'profile': profile,
        'menu_items': menu_items
    })

def settings(request):
    return render(request, 'temp/__settings.html')


class UserProfileView(generics.ListCreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer
