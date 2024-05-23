from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    # return HttpResponse('Hello World! You are in home.')
    return render(request, 'website1/index.html')

def about(request):
    return HttpResponse('Hello World! You are in about.')

def contact(request):
    return HttpResponse('Hello World! You are in contact.')

