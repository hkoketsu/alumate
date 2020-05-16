from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

app_name="health_check"

urlpatterns = [
    path('', views.health_check, name='health_check')
]

urlpatterns = format_suffix_patterns(urlpatterns)