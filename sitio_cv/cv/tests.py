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


class CvMatiasValenciaViewTests(TestCase):
    def test_cv_matias_valencia_renders_at_homepage_link(self):
        response = self.client.get("/cv/matias-valencia/")

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "cv/cv_matias_valencia.html")
        self.assertContains(response, "Matías Valencia")
        self.assertContains(response, "matias.valencia@alumnos.ucentral.cl")
