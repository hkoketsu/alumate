from rest_framework import serializers
from . import models

class MessageSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.Message
        fields = '__all__'