from django.urls import path

from frontend import views

urlpatterns = [
    path('', views.index),
    path('room-join-page', views.index),
    path('room-create-page', views.index)
]
