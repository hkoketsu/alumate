from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from . import models, serializers
from django.contrib.auth import get_user_model
User = get_user_model()

# search view

class SearchView(generics.ListAPIView):
    queryset = models.Ask.objects.all()
    serializer_class = serializers.Ask

    def get_queryset(self):
        params = self.request.GET
        queryset = super().get_queryset()
        major = params.get('major', None)
        country = params.get('country', None)
        status = params.get('status', None)
        start_year = params.get('start-year', None)
        end_year = params.get('end-year', None)
        if major:
            queryset = queryset.filter(major=major)
        if country:
            queryset = queryset.filter(country=country)
        if status:
            queryset = queryset.filter(status=status)
        if start_year:
            queryset = queryset.filter(start_year=start_year)
        if end_year:
            queryset = queryset.filter(end_year=end_year)
        return queryset