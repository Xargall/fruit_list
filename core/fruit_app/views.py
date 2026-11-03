from django.http import JsonResponse

# Create your views here.


def send_fruits(request):
    fruits = [
        {"name": "Banane", "color": "gelb", "weight": 300},
        {"name": "Apfel", "color": "rot", "weight": 250},
        {"name": "Pfirsich", "color": "rosa", "weight": 150},
        {"name": "Blaubeere", "color": "blau", "weight": 10},
        {"name": "Melone", "color": "grün/rot", "weight": 2000},
    ]

    return JsonResponse(fruits, safe=False)
