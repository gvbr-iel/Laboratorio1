from django.shortcuts import render


def home(request):
    integrantes = [
        {"nombre": "Matías Valencia", "url": "/cv/matias-valencia/"},
        {"nombre": "Gabriel Jorquera", "url": "/cv/gabriel-jorquera/"},
    ]
    return render(request, "home.html", {"integrantes": integrantes})


def cv_ejemplo(request):
    contexto = {
        "nombre": "Alex Rivera",
        "titulo_profesional": "Desarrollador/a web",
        "contacto": {
            "email": "alex.rivera@example.com",
            "telefono": "+56 9 1234 5678",
            "ciudad": "Santiago, Chile",
        },
        "habilidades": [
            "Python",
            "Django",
            "HTML y CSS",
        ],
        "experiencia": [
            {
                "puesto": "Desarrollador/a web junior",
                "empresa": "Estudio Digital Ficticio",
                "periodo": "2023 - 2025",
                "descripcion": "Desarrollo y mantenimiento de sitios web.",
            },
            {
                "puesto": "Practicante de desarrollo",
                "empresa": "Equipo Innovacion",
                "periodo": "2022 - 2023",
                "descripcion": "Colaboracion en proyectos web y pruebas funcionales.",
            },
        ],
    }
    return render(request, "cv/cv_ejemplo.html", contexto)
