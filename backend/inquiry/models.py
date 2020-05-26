from django.db import models
from django.contrib.auth.models import User
from accounts.models import CurrentStatus
from accounts.models import Country, School, Major

# Create your models here.

class Inquiry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    body = models.CharField(max_length=3000)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.user.__str__() + ": " + self.title

    class Meta:
        ordering = ['-created_at']

class InquiryComment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    inquiry = models.ForeignKey(Inquiry, on_delete=models.CASCADE, related_name="comments")
    body = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)

class InquiryLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    inquiry = models.ForeignKey(Inquiry, on_delete=models.CASCADE, related_name="likes")

class InquiryCommentLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(InquiryComment, on_delete=models.CASCADE, related_name="likes")

class InquiryTag(models.Model):
    inquiry = models.ForeignKey(Inquiry, on_delete=models.SET_NULL, null=True, blank=True)

    class Meta:
        abstract = True

class InquiryTagStatus(InquiryTag):
    body = models.CharField(max_length=20, choices=CurrentStatus.choices, default=CurrentStatus.CURRENT_STUDENT)

class InquiryTagHomeCountry(InquiryTag):
    body = models.ForeignKey(Country, on_delete=models.SET_NULL, related_name="Inquiry_country_origin", null=True, blank=True)

class InquiryTagStudyAbroadCountry(InquiryTag):
    body = models.ForeignKey(Country, on_delete=models.SET_NULL, related_name="Inquiry_country_study_abroad", null=True, blank=True)

class InquiryTagSchool(InquiryTag):
    body = models.ForeignKey(School, on_delete=models.CASCADE, related_name='Inquiry_school')

class InquiryTagMajor(InquiryTag):
    body =  models.ForeignKey(Major, on_delete=models.CASCADE, related_name='Inquiry_school')

# class InquiryTagHomeCountry(models.Model):
#     living_city = models.ForeignKey('City', on_delete=models.SET_NULL, null=True, blank=True)

class InquiryTagStartYear(InquiryTag):
    lower_bound =  models.IntegerField(null=True, blank=True)
    upper_bound =  models.IntegerField(null=True, blank=True)

class InquiryTagEndYear(InquiryTag):
    lower_bound = models.IntegerField(null=True, blank=True)
    upper_bound = models.IntegerField(null=True, blank=True)
