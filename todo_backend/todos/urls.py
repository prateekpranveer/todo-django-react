from .views import *
from django.urls import path




urlpatterns = [
    path('', home),
    path('task', postTask),
    path('task/<int:pk>/', deleteTask),
    path('task/<int:pk>/', markCompleted)
]
