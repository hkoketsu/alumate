from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()
# Create your models here.

class Notification(models.Model):
    """
    notification_type : "unread messages_count", "new_followers_count", "upadate_profile_info"...
    notification_data : unread_messages_count = 3, new_followers_count = 2, 
                        upadate_profile_info = "Please update profile info for more visiblity"
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    notification_type = models.CharField(max_length=100)
    notification_data = models.CharField(max_length=100)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username + " has: " + self.notification_data + " " + self.notification_type
