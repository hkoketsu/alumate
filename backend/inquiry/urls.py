from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

app_name="inquiry"

urlpatterns = [
    path('search', views.SearchView.as_view(), name='search'),

    path('<int:pk>', views.InquiryView.as_view(), name='inquiry'),

    path('comments/<int:pk>', views.InquiryComment.as_view(), name='comment'),

    path('likes/<int:pk>', views.InquiryLike.as_view(), name='likes'),

    path('commentLikes/<int:pk>', views.InquiryCommentLike.as_view(), name='commentlike'),
]

urlpatterns = format_suffix_patterns(urlpatterns)