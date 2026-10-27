from django.test import TestCase


class HomeViewTests(TestCase):
    def test_home_displays_group_members_with_cv_links(self):
        response = self.client.get("/")

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "home.html")
        self.assertContains(response, '<a href="/cv/matias-valencia/">Matías Valencia</a>')
        self.assertContains(response, '<a href="/cv/gabriel-jorquera/">Gabriel Jorquera</a>')
