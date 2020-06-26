from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

app_name = "message"

urlpatterns = [
    # list all messages
    path('', views.MessagesListView.as_view(), name='messages_list'),
    # list, create for one user
    path('user/<int:pk>', views.MessageListView.as_view(), name='message_list_create'),
    # retrieve, update, delete a message
    path('<int:pk>', views.MessageDetailView.as_view(), name='messages'),
]
