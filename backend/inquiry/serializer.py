from rest_framework import serializers
from . import models
from django.contrib.auth import get_user_model
User = get_user_model()

class SearchViewSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:

class InquiryViewSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.InquiryTag
    