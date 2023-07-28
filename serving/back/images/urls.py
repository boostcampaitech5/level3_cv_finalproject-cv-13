from django.urls import path
from . import views

app_name = 'images'

urlpatterns = [
    path('process/', views.process, name='process'),
    path('result/', views.result, name='result'),
    path('send/depth/', views.send_depth, name='send_depth'),
    path('send/pcd/', views.send_pcd, name='send_pcd'),
]