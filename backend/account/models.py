from django.db import models
import datetime
from datetime import date
from django.utils.translation import gettext_lazy as _
from django_resized import ResizedImageField
from django.contrib.auth import get_user_model
User = get_user_model()

current_year = date.today().year

class School(models.Model):
    name = models.CharField(max_length=120)
    country = models.ForeignKey('Country', on_delete=models.SET_NULL, null=True, related_name='schools')

    def __str__(self):
        return self.name
    
    class Meta:
        ordering= ['name']

class Major(models.Model):
    name = models.CharField(max_length=120)

    def __str__(self):
        return self.name
    
    class Meta:
        ordering= ['name']

class Country(models.Model):
    name = models.CharField(max_length=70)   # change in to choose filed
    
    def __str__(self):
        return self.name
    
    class Meta:
        ordering= ['name']

class Gender(models.TextChoices):
    MALE = 'M', _('Male'),
    FEMALE = 'F', _('Female'),
    NON_BINARY = 'NB', _('Genderqueer/Non-Binary'),
    NO_ANSWER = 'NA', _('Prefer not to disclose')


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True)
    gender = models.CharField(max_length=30, choices=Gender.choices, default=Gender.NO_ANSWER)
    birthday = models.DateField(null=True)

    def __str__(self):
        return self.user.__str__()

class CurrentStatus(models.TextChoices):
    FUTURE_STUDENT = 'FU', _('Future Student'),
    CURRENT_STUDENT = 'CU', _('Current Student'),
    ALUMNI = 'AL', _('Alumni')

class BasicInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    name = models.CharField(max_length=40)
    status = models.CharField(max_length=20, choices=CurrentStatus.choices, default=CurrentStatus.CURRENT_STUDENT)
    country_origin = models.ForeignKey(Country, on_delete=models.SET_NULL, related_name="basic_info_with_country_origin", null=True, blank=True)
    country_study_abroad = models.ForeignKey(Country, on_delete=models.SET_NULL, related_name="basic_info_with_country_study_abroad", null=True, blank=True)
    # living_city = models.ForeignKey('City', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.user.__str__()
    
class ProfileImage(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, related_name="profile_image")
    image_path = models.CharField(max_length=1000)
    
    def __str__(self):
        return self.user.__str__() + "'s profile image"
    
class Goal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='goals')
    body = models.CharField(max_length=30)

    def __str__(self):
        return self.user.__str__() + "'s goal: " + self.body

class StudyInterest(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='study_interests')
    body = models.CharField(max_length=30)
    
    def __str__(self):
        return self.user.__str__() + "'s study interest: " + self.body


class About(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    body = models.CharField(max_length=2000, null=True, blank=True)
    
    def __str__(self):
        return self.user.__str__() + "'s about: " + self.body[:10]

class StudentStatus(models.TextChoices):
    CURRENT = 'C', _('I am currently studying at this school'),
    PAST = 'P', _('I studied at this school'),
    FUTURE = 'F', _('I am going to study at this school'),
    TARGET = 'T', _('This is my target school'),

class DegreeStatus(models.TextChoices):
    BACHELOR = 'B', _('Bachelor'),
    MASTER = 'M', _('Master'),
    PHD = 'P', _('PhD'),
    OTHER = 'O', _('Others')

class History(models.Model):
    # years need to be char as they include 'target', 'still planning', 'present'
    start_year =  models.CharField(max_length=15, null=True, blank=True)
    end_year = models.CharField(max_length=15, null=True, blank=True)
    
    class Meta:
        abstract = True
        ordering = ['-end_year', '-start_year']
    
class Education(History):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='educations')
    school = models.ForeignKey(School, on_delete=models.CASCADE, related_name='related_educations')
    degree = models.CharField(max_length=30, choices=DegreeStatus.choices, default=DegreeStatus.BACHELOR)
    major =  models.ForeignKey(Major, on_delete=models.CASCADE, related_name='related_educations')
    is_study_abroad = models.BooleanField(default=False)
    # status = models.CharField(max_length=30, choices=EducationStatus.choices, default=EducationStatus.CURRENT)
    
    def __str__(self):
        return self.school.__str__() + " (" + str(self.start_year) + " - " + str(self.end_year) + ")"


class StudyAbroad(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, related_name="study_abroad")
    education = models.OneToOneField(Education, on_delete=models.CASCADE)

class WorkStatus(models.TextChoices):
    PAST = 'P', _('I worked at this company'),
    CURRENT = 'C', _('I am currently working at this company'),
    TARGET = 'T', _('This is my target company'),

class WorkExperience(History):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='works')
    company = models.CharField(max_length=30) 
    position = models.CharField(max_length=30)
    # status = models.CharField(max_length=30, choices=WorkStatus.choices, default=WorkStatus.PAST)
    
    def __str__(self):
        return self.user.__str__() + ' worked at ' + self.company + ' as ' + self.position 
    
class Scholarship(History):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='scholarships')
    organization = models.CharField(max_length=100)
    title = models.CharField(max_length=100)


class SocialLink(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='social_links')
    title = models.CharField(max_length=20)
    url = models.URLField()

    def __str__(self):
        return self.user.__str__() + "'s link: " + self.title

class City(models.Model):
    city_name = models.CharField(max_length=50)
    country = models.ForeignKey('Country', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.city_name + ', ' + self.country.__str__()

class Follow(models.Model):
    follower = models.ForeignKey(User, on_delete=models.CASCADE, related_name="following_users")
    followed = models.ForeignKey(User, related_name='followed_users', on_delete=models.CASCADE)

    def __str__(self):
        return self.follower.__str__() + ' following ' + self.followed.__str__()
