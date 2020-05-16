from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

app_name = "account"

urlpatterns = [
    # create
    path('', views.PostCreateView.as_view(), name='post-create'),
    # list
    path('user/<int:pk>', views.PostListView.as_view(), name='post-list'),
    # list / create
    path('comments/<int:pk>/', views.PostCommentListView.as_view(),
         name='post-comment-list-create'),
    path('likes/<int:pk>/', views.PostLikeListView.as_view(),
         name='post-like-list-create'),
    path('comment-likes/<int:pk>/', views.PostCommentLikeListView.as_view(),
         name='post-comment-like-list-create'),

    # retrieve / update / delete
    path('<int:pk>/', views.PostDetailView.as_view()),
    path('comment/<int:pk>/', views.PostCommentDetailView.as_view()),
    path('like/<int:pk>/', views.PostLikeDetailView.as_view()),
    path('comment-like/<int:pk>/', views.PostCommentLikeDetailView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
