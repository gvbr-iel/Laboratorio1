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


def cv_gabriel(request):
    contexto = {
        "nombre": "Gabriel Jorquera",
        "titulo_profesional": "Estudiante de desarrollo web",
        "contacto": {
            "email": "Completar correo electrónico",
            "telefono": "Completar teléfono",
            "ciudad": "Completar ciudad",
        },
        "habilidades": [
            "Python",
            "Django",
            "HTML y CSS",
        ],
        "experiencia": [
            {
                "puesto": "Desarrollo de sitio web de CV",
                "empresa": "Proyecto académico",
                "periodo": "2026",
                "descripcion": (
                    "Creación de páginas de currículum con Django, "
                    "vistas, rutas y plantillas HTML."
                ),
            },
        ],
    }
    return render(request, "cv/cv_gabriel.html", contexto)
def cv_matias_valencia(request):
    contexto = {
        "nombre": "Matías Valencia",
        "titulo_profesional": "Estudiante de Ingeniería Civil en Computación e Informática",
        "contacto": {
            "email": "matias.valencia@alumnos.ucentral.cl",
            "telefono": "+56 9 6819 8651",
            "ciudad": "Coquimbo, Chile",
        },
        "habilidades": [
            "Python",
            "React",
            "Django",
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "experiencia": [
            {
                "puesto": "Desarrollador",
                "empresa": "PRUFODIS Universidad Central Región de Coquimbo",
                "periodo": "2026",
                "descripcion": "Desarrollo de sistema de gestión de alumnos.",
            },
        ],
    }
    return render(request, "cv/cv_matias_valencia.html", contexto)
