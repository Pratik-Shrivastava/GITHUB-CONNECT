# github_api/serializers.py
from rest_framework import serializers
from .models import GithubUser

class GithubUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = GithubUser
        fields = '__all__'
