# github_api/views.py
import pandas as pd
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .forms import UploadFileForm
from .models import GithubUser
from .serializers import GithubUserSerializer
import requests
from rest_framework.test import APIRequestFactory
from .github_views import GithubProfileView
from io import BytesIO
import openpyxl

class FileUploadView(APIView):
    def post(self, request):
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            file = request.FILES['file']
            df = pd.read_excel(file)

            usernames = df['github'].apply(lambda x: x.split('/')[-1])
            factory = APIRequestFactory()
            github_profile_view = GithubProfileView.as_view()

            for username in usernames:
                request = factory.get(f'/api/github/{username}/')
                response = github_profile_view(request, username=username)
                if response.status_code == 200:
                    profile_data = response.data
                    GithubUser.objects.update_or_create(username=username, defaults={'profile_data': profile_data})

            return JsonResponse({'message': 'File processed successfully'}, status=status.HTTP_201_CREATED)
        return JsonResponse({'error': 'Invalid form submission'}, status=status.HTTP_400_BAD_REQUEST)

class DownloadExcelView(APIView):
    def get(self, request):
        users = GithubUser.objects.all()
        serializer = GithubUserSerializer(users, many=True)
        df = pd.DataFrame(serializer.data)

        output = BytesIO()
        writer = pd.ExcelWriter(output, engine='openpyxl')
        df.to_excel(writer, index=False, sheet_name='GitHub Users')
        writer.save()
        output.seek(0)

        response = HttpResponse(output, content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        response['Content-Disposition'] = 'attachment; filename=github_users.xlsx'

        return response
