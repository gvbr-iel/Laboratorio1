from django.test import TestCase


class HomeViewTests(TestCase):
    def test_home_displays_group_members_with_cv_links(self):
        response = self.client.get("/")

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "home.html")
        self.assertContains(response, '<a href="/cv/matias-valencia/">Matías Valencia</a>')
        self.assertContains(response, '<a href="/cv/gabriel-jorquera/">Gabriel Jorquera</a>')
        self.assertContains(response, '<a href="/cv/ejemplo/">Ver CV de ejemplo</a>')


class CvEjemploViewTests(TestCase):
    def test_cv_ejemplo_renders_context_data_and_lists(self):
        response = self.client.get("/cv/ejemplo/")

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "cv/cv_ejemplo.html")
        self.assertEqual(response.context["nombre"], "Alex Rivera")
        self.assertContains(response, "Desarrollador/a web")
        self.assertContains(response, "alex.rivera@example.com")
        self.assertContains(response, "Python")
        self.assertContains(response, "Estudio Digital Ficticio")
        self.assertContains(response, "Colaboracion en proyectos web")


class CvGabrielViewTests(TestCase):
    def test_cv_gabriel_displays_personal_context_and_lists(self):
        response = self.client.get("/cv/gabriel-jorquera/")

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "cv/cv_gabriel.html")
        self.assertEqual(response.context["nombre"], "Gabriel Jorquera")
        self.assertContains(response, "Estudiante de desarrollo web")
        self.assertContains(response, "Python")
        self.assertContains(response, "Proyecto académico")
        self.assertContains(response, "sitio web de CV")

    def test_home_links_to_gabriel_cv(self):
        response = self.client.get("/")

        self.assertContains(
            response,
            '<a href="/cv/gabriel-jorquera/">Ver CV de Gabriel Jorquera</a>',
        )
class CvMatiasValenciaViewTests(TestCase):
    def test_cv_matias_valencia_renders_styled_profile_and_contact_information(self):
        response = self.client.get("/cv/matias-valencia/")

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "cv/cv_matias_valencia.html")
        self.assertContains(response, 'class="cv-card"')
        self.assertContains(response, 'class="experience-item"')
        self.assertContains(response, 'href="mailto:matias.valencia@alumnos.ucentral.cl">Contactar</a>')
        self.assertContains(
            response,
            'href="mailto:matias.valencia@alumnos.ucentral.cl"',
        )
        self.assertContains(response, "Matías Valencia")
        self.assertContains(response, "matias.valencia@alumnos.ucentral.cl")
        self.assertContains(response, "Coquimbo, Chile")
        self.assertContains(response, "PRUFODIS Universidad Central Región de Coquimbo")

    def test_navigation_links_to_matias_cv(self):
        response = self.client.get("/cv/matias-valencia/")

        self.assertContains(response, '<a href="/cv/matias-valencia/">CV de Matías</a>')
