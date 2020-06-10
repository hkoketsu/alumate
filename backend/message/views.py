from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from . import serializers
from . models import Message
from rest_framework import permissions
import datetime
from itertools import chain
from django.contrib.auth import get_user_model
from rest_framework import permissions
# Create your views here.
User = get_user_model()

# list all the messages for a user
class MessagesListView(generics.ListAPIView):
    serializer_class = serializers.MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        sender_list = Message.objects.filter(receiver=user).values_list('sender', flat=True)
        receiver_list = Message.objects.filter(sender=user).values_list('receiver', flat=True)

        received_message_list = []
        for sender in sender_list:
            latest_message = Message.objects.filter(sender=sender)[0]
            received_message_list.append(latest_message)
        
        sent_message_list = []
        for receiver in receiver_list:
            latest_message = Message.objects.filter(receiver=receiver)[0]
            sent_message_list.append(latest_message)

        sender_and_receiver_set = set(chain(sender_list, receiver_list))
        sent_and_received_message_list = sorted(chain(received_message_list, sent_message_list), key=lambda x: x.sent_datetime, reverse=True)

        latest_message_list = []
        for message in sent_and_received_message_list:
            new_user = None
            if message.sender == user and message.receiver.id in sender_and_receiver_set:
                new_user = message.receiver
            elif message.receiver == user and message.sender.id in sender_and_receiver_set:
                new_user = message.sender
            
            if new_user:
                latest_message_list.append(message)
                sender_and_receiver_set.remove(new_user.id)
        return latest_message_list

# list, create messages for a particular user
class MessageListView(generics.ListCreateAPIView):
    serializer_class = serializers.MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        to_user = get_object_or_404(User, pk=self.kwargs.pop('pk'))
        received_messages = Message.objects.filter(sender=to_user, receiver=user)
        sent_message = Message.objects.filter(sender=user, receiver=to_user)
        messages = sorted(chain(received_messages, sent_message), key=lambda x: x.sent_datetime)
        return messages

    def create(self, request, *args, **kwargs):
        other_user = get_object_or_404(User, pk=self.kwargs.pop('pk'))
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        message = Message.objects.create(
                sender = self.request.user,
                receiver = other_user,
                body = serializer.validated_data['body'],
            )
        serializer = serializers.MessageSerializer(instance=message)
        headers = self.get_success_headers(serializer.data)
        return Response(data=serializer.data, status=status.HTTP_201_CREATED, headers=headers)

# retrieve, update, delete a message created by user
class MessageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = serializers.MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        queryset = self.get_queryset()
        obj_id = self.kwargs.pop('pk')
        user = self.request.user
        message = Message.objects.get(id=obj_id)
        if message.sender == user:
            return get_object_or_404(queryset, id=obj_id)
        return None
