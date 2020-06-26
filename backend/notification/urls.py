from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

app_name = "notification"

urlpatterns = [
    # list all notifications
    path('', views.NotificationListView.as_view(), name='notification_list'),
    
]