from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework import permissions
from . import serializers
from .models import Notification
from django.contrib.auth import get_user_model
# Create your views here.
User = get_user_model()

# list all notifications for a user
class NotificationListView(generics.ListAPIView):
    serializer_class = serializers.NotificationSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    #  Get all notifications for the user
    def get_queryset(self):
        user = self.request.user
        notification = Notification.objects.filter(user=user)
        return notification