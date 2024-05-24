from django.urls import path
from .views import FileUploadView, DownloadExcelView

urlpatterns = [
    path('upload/', FileUploadView.as_view(), name='file-upload'),
    path('download/', DownloadExcelView.as_view(), name='file-download'),
]
