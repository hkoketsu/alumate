from rest_framework import serializers
from . import models


class PostSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.Post
        fields = '__all__'


class PostCommentSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.PostComment
        fields = '__all__'


class PostCommentCreateSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.PostComment
        exclude = ['post']


class PostLikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PostLike
        fields = '__all__'


class PostCommentLikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PostCommentLike
        fields = '__all__'
