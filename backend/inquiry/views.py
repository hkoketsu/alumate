from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from . import models, serializers
from django.contrib.auth import get_user_model
User = get_user_model()

# search view

class SearchView(generics.ListAPIView):
    queryset = models.Inquiry.objects.all()
    serializer_class = serializers.SearchViewSerializer

    def get_queryset(self):
        params = self.request.GET
        queryset = super().get_queryset()
        major = params.get('major', None)
        country = params.get('country', None)
        status = params.get('status', None)
        start_year = params.get('start-year', None)
        end_year = params.get('end-year', None)
        inquiries_ids_related_major = list(queryset.values_list('id'))
        if major:
            inquiries_ids_related_major = list(models.InquiryTagMajor.filter(body=major).values_list('inquiry'))
            # queryset = queryset.filter(major=major)
        if country:
            inquiries_ids_related_country = list(models.InquiryTagCountry.filter(body=country).values_list('inquiry'))
            # queryset = queryset.filter(country=country)
        # if status:
        #     queryset = queryset.filter(status=status)
        # if start_year:
        #     queryset = queryset.filter(start_year=start_year)
        # if end_year:
        #     queryset = queryset.filter(end_year=end_year)
        inquiries = inquiries_related_major | inquiries_related_country
        inquiry_queryset = models.Inquiry.filter(id_in=inquiries)
        return inquiry_queryset

class InquiryView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Inquiry.objects.all()
    serializer_class = serializers.InquiryViewSerializer

    def get_queryset(self):
        params = self.request.GET
        queryset = super().get_queryset()
        id = params.get('id', None)
        if id:
            queryset = querset.filter(id=id)
        else
            queryset = None
        return queryset

    def post(self, request, pk=None):
        params = self.request.POST
        major = params.get('major', None)
        country = params.get('country', None)
        status = params.get('status', None)
        start_year = params.get('start-year', None)
        end_year = params.get('end-year', None)
        follow_user = get_object_or_404(User, pk=pk)
        try:
            inquiry = models.Inquiry.objects.get(follower=user, followed=follow_user)
            serializer = self.serializer_class(post_like)
            return Response(serializer.data, status=status.HTTP_303_SEE_OTHER)
        except models.Inquiry.DoesNotExist: # normal case
            follow = models.Follow.objects.create(follower=user, followed=follow_user)
            serializer = self.serializer_class(follow)
            return Response(serializer.data, status=status.HTTP_201_CREATED)