from rest_framework import serializers
from . import models
from alumate_api.settings import AUTH_USER_MODEL as User


class AboutSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.About
        fields = '__all__'


class BasicInfoSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.BasicInfo
        fields = '__all__'

    def to_representation(self, instance):
        self.fields['country_origin'] = CountrySerializer()
        self.fields['country_study_abroad'] = CountrySerializer()
        return super(BasicInfoSerializer, self).to_representation(instance)


class MajorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Major
        fields = '__all__'


class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.School
        fields = '__all__'


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Country
        fields = '__all__'


class GoalSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.Goal
        fields = '__all__'


class StudyInterestSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.StudyInterest
        fields = '__all__'


class EducationSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.Education
        fields = '__all__'

    def to_representation(self, instance):
        self.fields['school'] = SchoolSerializer()
        self.fields['major'] = MajorSerializer()
        return super(EducationSerializer, self).to_representation(instance)


class WorkExperienceSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.WorkExperience
        fields = '__all__'


class ScholarshipSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.Scholarship
        fields = '__all__'


class SocialLinkSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.SocialLink
        fields = '__all__'



class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Follow
        fields = '__all__'


class FollowCreateSerializer(serializers.ModelSerializer):
    following = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.Follow
        exclude = ['followed']


class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.Profile
        fields = '__all__'


class ProfileImageSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.ProfileImage
        fields = '__all__'
