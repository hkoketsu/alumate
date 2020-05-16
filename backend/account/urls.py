from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

app_name="account"

urlpatterns = [
    # list
    path('countries', views.CountryListView.as_view(), name='countries'),
    path('schools', views.SchoolListView.as_view(), name='schools'),
    path('majors', views.MajorListView.as_view(), name='majors'),
    
    path('followings', views.FollowingListView.as_view(), name='following'),
    path('follweds', views.FollowedListView.as_view(), name='followed'),
    
    # list + create
    path('basic-infos', views.BasicInfoListView.as_view(), name='basic-infos'),
    path('educations', views.EducationListView.as_view(), name='educations'),
    path('goals', views.GoalListView.as_view(), name='goals'),
    path('study-interests', views.StudyInterestListView.as_view(), name='study-interests'),
    path('scholarshps', views.ScholarshipListView.as_view(), name='scholarships'),
    path('social-links', views.SocialLinkListView.as_view(), name='social-links'),
    path('works', views.WorkExperienceListView.as_view(), name='works'),

    # retrieve / update / delete
    path('about', views.AboutDetailView.as_view(), name='about'),
    path('basic-info', views.BasicInfoDetailView.as_view(), name='basic-info'),
    path('profile', views.ProfileDetailView.as_view(), name='profile'),
    path('profile-image', views.ProfileImageDetailView.as_view(), name='profile-image'),
    
    path('educations/<int:pk>', views.EducationDetailView.as_view(), name='education'),
    path('scholarshps/<int:pk>', views.ScholarshipDetailView.as_view(), name='scholarship'),
    path('social-links/<int:pk>', views.SocialLinkDetailView.as_view(), name='social-link'),
    path('works/<int:pk>', views.WorkDetailView.as_view(), name='work'),

    # retrieve / destroy
    path('goals/<int:pk>', views.GoalDetailView.as_view(), name='goal'),
    path('study-interests/<int:pk>', views.StudyInterestDetailView.as_view(), name='study-interest'),

    # create
    path('follow/<int:pk>', views.FollowView.as_view(), name='follow'),
    
    # delete
    path('unfollow/<int:pk>', views.UnfollowView.as_view(), name='unfollow'),
]

urlpatterns = format_suffix_patterns(urlpatterns)