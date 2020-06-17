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
        inquiries_ids_related_country = list(queryset.values_list('id'))
        inquiries_ids_related_start_year = list(queryset.values_list('id'))
        inquiries_ids_related_end_year = list(queryset.values_list('id'))
        inquiries_ids_related_status = list(queryset.values_list('id'))

        if major:
            inquiries_ids_related_major = list(models.InquiryTagMajor.filter(body=major).values_list('inquiry'))
        if country:
            inquiries_ids_related_country = list(models.InquiryTagCountry.filter(body=country).values_list('inquiry'))
        if start_year:
            inquiries_ids_related_start_year = list(models.InquiryTagStartYear.filter(lower_bound = start_year, upper_bound = start_year).values_list('inquiry'))        if start_year:
        if end_year:
            inquiries_ids_related_end_year = list(models.InquiryTagEndYear.filter(body=country).values_list('inquiry'))
        if status:
            inquiries_ids_related_status = list(models.InquiryTagStatus.filter(body=status).values_list('inquiry'))
        
        inquiries = inquiries_related_major | inquiries_related_country | inquiries_ids_related_start_year | inquiries_ids_related_end_year | inquiries_ids_related_status
        inquiry_queryset = models.Inquiry.filter(id_in=inquiries)
        return inquiry_queryset

class InquiryView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Inquiry.objects.all()
    serializer_class = serializers.InquiryViewSerializer

    def get_object(self):
        params = self.request.GET
        queryset = self.get_queryset()
        obj_id = self.kwargs.pop('pk')
        return get_object_or_404(queryset, pk=obj_id)

    def put_object(self, request, pk):
        params = request.PUT
        queryset = self.get_queryset()
        obj_id = self.kwargs.pop('pk')
        inquiry = get_object_or_404(queryset, pk=obj_id)

        title = params.get('title', None)
        body = params.get('body', None)

        setattr(inquiry, 'title', title)
        setattr(inquiry, 'body', body)

    def delete(self, request, pk, format=None)
        inquiry = queryset.get_object(pk)
        inquiry.delete()

class InquiryComment(generics.RetrieveUpdateAPIView):
    queryset = models.InquiryComment.objects.all()
    serializer_class = serializers.InquiryCommentSerializer
    
    def get_queryset(self):
        params = self.request.GET
        queryset = self.get_queryset()
        inquiryId = self.kwargs.pop('pk')

        if inquiryId:
            return list(queryset.filter(pk=inquiryId))
        else :
            return HttpResponseNotFound('<h1>Inquiry Id not provided</h1>')

    def post(self, request, pk=None):
        params = request.POST
        user = params.get('user', None)
        inquiryId = params.get('inquiryId', None)
        body = params.get('body', None)

        try:
            comment = models.InquiryComment.objects.get(user=user, inquiry=inquiryId, body=body)
            serializer = self.serializer_class(post_like)
            return Response(serializer.data, status=status.HTTP_303_SEE_OTHER)
        except models.Comment.DoesNotExist: # normal case
            comment = models.InquiryComment.objects.create(user=user, inquiry=inquiryId, body=body)
            serializer = self.serializer_class(comment)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

class InquiryLike(generics.RetrieveUpdateAPIView):
    queryset = models.InquiryLike.objects.all()
    serializer_class = serializers.InquiryLikeSerializer

    def get_queryset(self):
        params = self.request.GET
        queryset = self.get_queryset()
        inquiryId = self.kwargs.pop('pk')

        if inquiryId:
            return list(queryset.filter(pk=inquiryId))
        else :
            return HttpResponseNotFound('<h1>Inquiry Id not provided</h1>')

    def post(self, request, pk=None):
        params = request.POST
        user = params.get('user', None)
        inquiryId = params.get('inquiryId', None)

        try:
            inquiryLike = models.InquiryLike.objects.get(user=user, inquiry=inquiryId)
            serializer = self.serializer_class(post_like)
            return Response(serializer.data, status=status.HTTP_303_SEE_OTHER)
        except models.Comment.DoesNotExist: # normal case
            inquiryLike = models.InquiryLike.objects.create(user=user, inquiry=inquiryId)
            serializer = self.serializer_class(inquiryLike)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, pk, format=None)
        inquiryLike = queryset.get_object(pk)
        inquiryLike.delete()

class InquiryCommentLike(generics.RetrieveUpdateAPIView):
    queryset = models.InquiryCommentLike.objects.all()
    serializer_class = serializers.InquiryCommentLikeSerializer

    def get_queryset(self):
        params = self.request.GET
        queryset = self.get_queryset()
        commentId = self.kwargs.pop('pk')

        if commentId:
            return list(queryset.filter(pk=commentId))
        else :
            return HttpResponseNotFound('<h1>Comment Id not provided</h1>')

    def post(self, request, pk=None):
        params = request.POST
        user = params.get('user', None)
        commentId = params.get('commentId', None)

        try :
            commentLike = models.InquiryCommentLike.objects.get(user=user, comment=commentId)
            serializer = self.serializer_class(post_like)
            return Response(serializer.data, status=status.HTTP_303_SEE_OTHER)
        except models.Comment.DoesNotExist: # normal case
            commentLike = models.InquiryCommentLike.objects.create(user=user, comment=commentId)
            serializer = self.serializer_class(commentLike)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, pk, format=None)
        inquiryCommentLike = queryset.get_object(pk)
        inquiryCommentLike.delete()