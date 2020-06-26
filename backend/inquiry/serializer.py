from rest_framework import serializers
from . import models
from django.contrib.auth import get_user_model
User = get_user_model()

class SearchViewSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.Inquiry
        fields = '__all__'

class InquiryViewSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.Inquiry
        fields = '__all__'

class InquiryCommentSerializer(serializers.ModelSerializer):
    comment = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.InquiryComment
        fields = '__all__'

class InquiryLikeSerializer(serializers.ModelSerializer):
    inquiryLike = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.InquiryCommentLike
        fields = '__all__'

class InquiryCommentLikeSerializer(serializers.ModelSerializer):
    commentLike = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.InquiryCommentLike
        fields = '__all__'