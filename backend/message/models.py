from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()
# Create your models here.

class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='sent_messages')
    receiver = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='received_messages')
    body = models.CharField(max_length=2000)
    sent_datetime = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return "from " + self.sender.username + " to " + self.receiver.username + " at " + str(self.sent_datetime)
    
    class Meta:
        ordering = ['-sent_datetime']
