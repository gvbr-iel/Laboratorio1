from django.shortcuts import render


def home(request):
    integrantes = [
        {"nombre": "Matías Valencia", "url": "/cv/matias-valencia/"},
        {"nombre": "Gabriel Jorquera", "url": "/cv/gabriel-jorquera/"},
    ]
    return render(request, "home.html", {"integrantes": integrantes})
