from rest_framework import serializers
from . import models

class NotificationSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.Notification
        fields = '__all__'