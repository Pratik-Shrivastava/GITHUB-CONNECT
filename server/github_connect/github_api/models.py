from django.db import models

# Create your models here.
class GithubUser(models.Model):
    username = models.CharField(max_length=100, unique=True)
    profile_data = models.JSONField()

    def __str__(self):
        return self.username
