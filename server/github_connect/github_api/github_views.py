# github_api/github_views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import requests

class GithubProfileView(APIView):
    def get(self, request, username, format=None):
        url = f"https://api.github.com/users/{username}"
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            return Response(data, status=status.HTTP_200_OK)
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
