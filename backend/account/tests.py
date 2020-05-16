from django.test import TestCase
from rest_framework import status
from . import models, views
from django.urls import reverse
from django.contrib.auth import get_user_model
User = get_user_model()
from alumate_api.test import get_auth_client
import tempfile


# list

class CountryTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('account:countries')

    def test_api_get_all_countries(self):
        self.assertEqual(models.Country.objects.count(), 0)
        models.Country.objects.create(name='Japan')
        models.Country.objects.create(name='USA')
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(models.Country.objects.count(), 2)

    def test_api_get_filtered_countries(self):
        self.assertEqual(models.Country.objects.count(), 0)
        models.Country.objects.create(name='Japan')
        models.Country.objects.create(name='USA')
        response = self.client.get('{}?starts-with=j'.format(self.url))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_api_cannot_create_country(self):
        response = self.client.post(self.url)
        self.assertEqual(response.status_code,
                         status.HTTP_405_METHOD_NOT_ALLOWED)


class SchoolTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('account:schools')

    def test_api_get_all_schools(self):
        self.assertEqual(models.School.objects.count(), 0)
        models.School.objects.create(name='UBC')
        models.School.objects.create(name='UT')
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(models.School.objects.count(), 2)

    def test_api_get_filtered_schools(self):
        self.assertEqual(models.School.objects.count(), 0)
        models.School.objects.create(name='UBC')
        models.School.objects.create(name='UT')
        response = self.client.get('{}?starts-with=ub'.format(self.url))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_api_cannot_create_school(self):
        response = self.client.post(self.url)
        self.assertEqual(response.status_code,
                         status.HTTP_405_METHOD_NOT_ALLOWED)


class MajorTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('account:majors')

    def test_api_get_all_majors(self):
        self.assertEqual(models.Major.objects.count(), 0)
        models.Major.objects.create(name='Arts')
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(models.Major.objects.count(), 1)
        models.Major.objects.create(name='Science')
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(models.Major.objects.count(), 2)

    def test_api_get_filtered_majors(self):
        self.assertEqual(models.Major.objects.count(), 0)
        models.Major.objects.create(name='Arts')
        models.Major.objects.create(name='Science')
        response = self.client.get('{}?starts-with=ar'.format(self.url))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_api_cannot_create_majors(self):
        response = self.client.post(self.url)
        self.assertEqual(response.status_code,
                         status.HTTP_405_METHOD_NOT_ALLOWED)


class GoalTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('account:goals')
        self.user = User.objects.get(username='testuser')

    def test_api_get_all_goals(self):
        self.assertEqual(models.Goal.objects.count(), 0)
        models.Goal.objects.create(user=self.user, body='aa')
        another_user = User.objects.create(username='another_user', password='another_pass')
        models.Goal.objects.create(user=another_user, body='bb')
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(models.Goal.objects.count(), 2)
    
    def test_api_get_user_goals(self):
        self.assertEqual(models.Goal.objects.count(), 0)
        models.Goal.objects.create(user=self.user, body='aa')
        another_user = User.objects.create(username='another_user', password='another_pass')
        models.Goal.objects.create(user=another_user, body='bb')
        response = self.client.get('{}?account={}'.format(self.url, self.user.id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(models.Goal.objects.count(), 1)

    def test_api_cannot_create_goal(self):
        response = self.client.post(self.url)
        self.assertEqual(response.status_code,
                         status.HTTP_405_METHOD_NOT_ALLOWED)


class StudyInterestTestCase(TestCase):
    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('account:study-interests')
        self.user = User.objects.get(username='testuser')

    def test_api_get_all_study_interest(self):
        self.assertEqual(models.StudyInterest.objects.count(), 0)
        models.StudyInterest.objects.create(user=self.user, body='aa')
        another_user = User.objects.create(username='another_user', password='another_pass')
        models.StudyInterest.objects.create(user=another_user, body='bb')
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(models.StudyInterest.objects.count(), 2)
    
    def test_api_get_all_study_interest(self):
        self.assertEqual(models.StudyInterest.objects.count(), 0)
        models.StudyInterest.objects.create(user=self.user, body='aa')
        another_user = User.objects.create(username='another_user', password='another_pass')
        models.StudyInterest.objects.create(user=another_user, body='bb')
        response = self.client.get('{}?account={}'.format(self.url, self.user.id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(models.StudyInterest.objects.count(), 2)

    def test_api_cannot_create_study_interest(self):
        response = self.client.post(self.url)
        self.assertEqual(response.status_code,
                         status.HTTP_405_METHOD_NOT_ALLOWED)


class UserFollowingTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('account:following')
        self.user = User.objects.get(username='testuser')
        User.objects.create(username='user1', password='testing1')

    def test_api_can_get_followings(self):
        user1 = User.objects.get(username='user1')
        models.Follow.objects.create(follower=self.user, followed=user1)
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        for item in response.data[0].items():
            if item[0] == 'follower':
                self.assertEqual(item[1], self.user.id)
            elif item[0] == 'followed':
                self.assertEqual(item[1], user1.id)


class UserFollowedTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('account:followed')
        self.user = User.objects.get(username='testuser')
        User.objects.create(username='user1', password='testing1')

    def test_api_can_get_followings(self):
        user1 = User.objects.get(username='user1')

        models.Follow.objects.create(follower=user1, followed=self.user)

        response = self.client.get('{}?account={}'.format(self.url, self.user.id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        for item in response.data[0].items():
            if item[0] == 'follower':
                self.assertEqual(item[1], user1.id)
            elif item[0] == 'followed':
                self.assertEqual(item[1], self.user.id)


# list / create

class BasicInfoTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('account:basic-infos')
        self.user = User.objects.get(username='testuser')
        country1 = models.Country.objects.create(name='Japan')
        country2 = models.Country.objects.create(name='Canada')
        user1 = User.objects.create(username='user1', password='testing1')
        self.user_basic_info = models.BasicInfo.objects.create(
            user=user1, name='testname', status=models.CurrentStatus.CURRENT_STUDENT, country_origin=country1, country_study_abroad=country2)

        self.data = {
            'name': 'client',
            'status': models.CurrentStatus.CURRENT_STUDENT,
            'country_origin': country1.id,
            'country_study_abroad': country2.id
        }

    def test_api_get_all_basic_info(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_api_create_user_basic_info(self):
        self.assertEqual(models.BasicInfo.objects.count(), 1)
        response = self.client.post(self.url, data=self.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(models.BasicInfo.objects.count(), 2)


class EducationTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('account:educations')
        self.user = User.objects.get(username='testuser')

        major = models.Major.objects.create(name='computer science')
        school1 = models.School.objects.create(name='University of smth1')
        school2 = models.School.objects.create(name='University of smth2')

        education = models.Education.objects.create(
            user=self.user, degree=models.DegreeStatus.BACHELOR, school=school1, major=major, is_study_abroad=False)

        self.data = {
            'degree': models.DegreeStatus.BACHELOR,
            'school': school2.id,
            'major': major.id,
            'is_study_abroad': False
        }


    def test_api_get_user_educations(self):
        response = self.client.get('{}?account={}'.format(self.url, self.user.id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_api_create_user_educations(self):
        self.assertEqual(models.Education.objects.count(), 1)
        response = self.client.post(self.url, self.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(models.Education.objects.count(), 2)


class GoalTestCase(TestCase):
    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('account:goals')
        self.user = User.objects.get(username='testuser')

        goal = models.Goal.objects.create(user=self.user, body='some goal')

        self.data = {
            'body': 'another goal'
        }

    def test_api_get_user_goals(self):
        response = self.client.get('{}?account={}'.format(self.url, self.user.id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_api_create_user_goal(self):
        self.assertEqual(models.Goal.objects.count(), 1)
        response = self.client.post(self.url, self.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(models.Goal.objects.count(), 2)


class StudyInterestTestCase(TestCase):
    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('account:study-interests')
        self.user = User.objects.get(username='testuser')

        study_interest = models.StudyInterest.objects.create(
            user=self.user, body='some study interest')

        self.data = {
            'body': 'another study interest'
        }

    def test_api_get_user_study_interests(self):
        response = self.client.get('{}?account={}'.format(self.url, self.user.id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_api_create_user_study_interest(self):
        self.assertEqual(models.StudyInterest.objects.count(), 1)
        response = self.client.post(self.url, self.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(models.StudyInterest.objects.count(), 2)


class ScholarshipTestCase(TestCase):
    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('account:scholarships')
        self.user = User.objects.get(username='testuser')

        scholarship = models.Scholarship.objects.create(
            user=self.user, organization='Some organization', title='Some Title')

        self.data = {
            'organization': 'Another organization',
            'title': 'Another Title'
        }

    def test_api_get_user_scholarships(self):
        response = self.client.get('{}?account={}'.format(self.url, self.user.id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_api_create_user_scholarship(self):
        self.assertEqual(models.Scholarship.objects.count(), 1)
        response = self.client.post(self.url, self.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(models.Scholarship.objects.count(), 2)


class SocialLinkTestCase(TestCase):
    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('account:social-links')
        self.user = User.objects.get(username='testuser')

        social_link = models.SocialLink.objects.create(
            user=self.user, title='Some Title', url='http://something.com')

        self.data = {
            'title': 'Another Title',
            'url': 'http://another.com'
        }

    def test_api_get_user_social_links_cannot_get_other_users(self):
        self.assertEqual(models.SocialLink.objects.count(), 1)
        models.SocialLink.objects.create(
            user=User.objects.create(
                username='another_user', password='foranotheruser'),
            title='Some Title',
            url='http://something.com'
        )
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_api_get_user_social_links(self):
        response = self.client.get('{}?account={}'.format(self.url, self.user.id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_api_create_user_social_link(self):
        self.assertEqual(models.SocialLink.objects.count(), 1)
        response = self.client.post(self.url, self.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(models.SocialLink.objects.count(), 2)


class WorkExperienceTestCase(TestCase):
    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('account:works')
        self.user = User.objects.get(username='testuser')

        work = models.WorkExperience.objects.create(
            user=self.user, company='Some company', position='Some position')

        self.data = {
            'company': 'Some company',
            'position': 'Some position'
        }

    def test_api_get_user_works_cannot_get_other_users(self):
        self.assertEqual(models.WorkExperience.objects.count(), 1)
        models.WorkExperience.objects.create(
            user=User.objects.create(
                username='another_user', password='foranotheruser'),
            company='Some company',
            position='Some position'
        )
        response = self.client.get('{}?account={}'.format(self.url, self.user.id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_api_get_user_works(self):
        response = self.client.get('{}?account={}'.format(self.url, self.user.id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_api_create_user_work(self):
        self.assertEqual(models.WorkExperience.objects.count(), 1)
        response = self.client.post(self.url, self.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(models.WorkExperience.objects.count(), 2)


# retrieve / update / delete

class AboutDetailTestCase(TestCase):
    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('account:about')
        self.user = User.objects.get(username='testuser')

    def test_api_can_retrieve_if_exists(self):
        body = 'About user'
        models.About.objects.create(user=self.user, body=body)
        response = self.client.get('{}?account={}'.format(self.url, self.user.id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('body'), body)

    def test_api_cannot_retrieve_if_not_exists(self):
        response = self.client.get('{}?account={}'.format(self.url, self.user.id))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_api_can_update(self):
        body = 'About user: not updated'
        models.About.objects.create(user=self.user, body=body)
        update_body = 'About user: updated'
        update_data = {'user': self.user.id, 'body': update_body}
        response = self.client.put(self.url, data=update_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('body'), update_body)

    def test_api_can_partial_update(self):
        body = 'About user: not updated'
        models.About.objects.create(user=self.user, body=body)
        update_body = 'About user: updated'
        update_data = {'body': update_body}
        response = self.client.put(self.url, data=update_data, partial=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('body'), update_body)

    def test_api_can_delete_if_exists(self):
        body = 'About user'
        models.About.objects.create(user=self.user, body=body)
        self.assertEqual(models.About.objects.count(), 1)
        response = self.client.delete(self.url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_api_cannot_delete_if_not_exists(self):
        self.assertEqual(models.About.objects.count(), 0)
        response = self.client.delete(self.url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class BasicInfoDetailTestCase(TestCase):
    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('account:basic-info')
        self.user = User.objects.get(username='testuser')

    def test_api_can_retrieve_if_exists(self):
        name = 'some name'
        country = models.Country.objects.create(name='some country')
        models.BasicInfo.objects.create(
            user=self.user, name=name, status=models.CurrentStatus.CURRENT_STUDENT, country_origin=country, country_study_abroad=country)
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('name'), name)

    def test_api_cannot_retrieve_if_not_exists(self):
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_api_can_update(self):
        name = 'name: not updated'
        country = models.Country.objects.create(name='some country')
        models.BasicInfo.objects.create(
            user=self.user, name=name, status=models.CurrentStatus.CURRENT_STUDENT, country_origin=country, country_study_abroad=country)
        update_name = 'name: updated'
        update_data = {'user': self.user.id, 'name': update_name, 'status': models.CurrentStatus.ALUMNI,
                       'country_origin': country.id, 'country_study_abroad': country.id}
        response = self.client.put(self.url, data=update_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('name'), update_name)

    def test_api_can_partial_update(self):
        name = 'name: not updated'
        country = models.Country.objects.create(name='some country')
        models.BasicInfo.objects.create(
            user=self.user, name=name, status=models.CurrentStatus.CURRENT_STUDENT, country_origin=country, country_study_abroad=country)
        update_name = 'name: updated'
        update_data = {'name': update_name}
        response = self.client.put(self.url, data=update_data, partial=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('name'), update_name)

    def test_api_can_delete_if_exists(self):
        country = models.Country.objects.create(name='some country')
        models.BasicInfo.objects.create(
            user=self.user, name='some name', status=models.CurrentStatus.CURRENT_STUDENT, country_origin=country, country_study_abroad=country)
        self.assertEqual(models.BasicInfo.objects.count(), 1)
        response = self.client.delete(self.url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_api_cannot_delete_if_not_exists(self):
        self.assertEqual(models.BasicInfo.objects.count(), 0)
        response = self.client.delete(self.url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class ProfileDetailTestCase(TestCase):
    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('account:profile')
        self.user = User.objects.get(username='testuser')

    def test_api_can_retrieve_if_exists(self):
        gender = models.Gender.MALE
        models.Profile.objects.create(
            user=self.user, gender=gender, birthday='1990-01-01')
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('gender'), gender)

    def test_api_cannot_retrieve_if_not_exists(self):
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_api_can_update(self):
        models.Profile.objects.create(
            user=self.user, gender=models.Gender.MALE, birthday='1990-01-01')
        update_data = {'user': self.user.id,
                       'gender': models.Gender.MALE, 'birthday': '1996-06-01'}
        response = self.client.put(self.url, data=update_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('gender'),
                         update_data.get('gender'))

    def test_api_can_partial_update(self):
        models.Profile.objects.create(
            user=self.user, gender=models.Gender.MALE, birthday='1990-01-01')
        update_data = {'birthday': '1996-06-01'}
        response = self.client.put(self.url, data=update_data, partial=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('birthday'),
                         update_data.get('birthday'))

    def test_api_can_delete_if_exists(self):
        models.Profile.objects.create(
            user=self.user, gender=models.Gender.MALE, birthday='1990-01-01')
        self.assertEqual(models.Profile.objects.count(), 1)
        response = self.client.delete(self.url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_api_cannot_delete_if_not_exists(self):
        self.assertEqual(models.Profile.objects.count(), 0)
        response = self.client.delete(self.url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class ProfileImageTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('account:profile-image')
        self.user = User.objects.get(username='testuser')
        self.image = tempfile.NamedTemporaryFile(suffix=".jpg").name
        self.updated_image = tempfile.NamedTemporaryFile(suffix=".jpg").name

    def test_api_can_retrieve_if_exists(self):
        models.ProfileImage.objects.create(
            user=self.user, image_path=self.image)
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('image_path'), self.image)

    def test_api_cannot_retrieve_if_not_exists(self):
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_api_can_update(self):
        models.ProfileImage.objects.create(
            user=self.user, image_path=self.image)
        update_data = {'user': self.user.id, 'image_path': self.updated_image}
        response = self.client.put(self.url, data=update_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('image_path'), self.updated_image)

    def test_api_can_partial_update(self):
        models.ProfileImage.objects.create(
            user=self.user, image_path=self.image)
        update_data = {'image_path': self.updated_image}
        response = self.client.put(self.url, data=update_data, partial=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('image_path'), self.updated_image)

    def test_api_can_delete_if_exists(self):
        models.ProfileImage.objects.create(
            user=self.user, image_path=self.image)
        self.assertEqual(models.ProfileImage.objects.count(), 1)
        response = self.client.delete(self.url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_api_cannot_delete_if_not_exists(self):
        self.assertEqual(models.ProfileImage.objects.count(), 0)
        response = self.client.delete(self.url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class EducationDetailTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.user = User.objects.get(username='testuser')
        school = models.School.objects.create(name='some university')
        major = models.Major.objects.create(name='some major')
        self.education = models.Education.objects.create(
            user=self.user, school=school, major=major, degree=models.DegreeStatus.BACHELOR, is_study_abroad=True)
        self.url = reverse('account:education',
                           kwargs={'pk': self.education.id})

    def test_api_can_retrieve_if_exists(self):
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('id'), self.education.id)

    def test_api_cannot_retrieve_if_not_exists(self):
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(
            reverse('account:education', kwargs={'pk': 100}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_api_can_update(self):
        school = models.School.objects.create(name='another school')
        update_data = {
            'user': self.user.id,
            'school': school.id,
            'major': models.Major.objects.create(name='another major').id,
            'degree': models.DegreeStatus.BACHELOR,
            'is_study_abroad': True
        }
        response = self.client.put(self.url, data=update_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('school').get('id'), school.id)

    def test_api_can_partial_update(self):
        school = models.School.objects.create(name='another school')
        major = models.Major.objects.create(name='another major')
        # school and major need to be included for partial update
        update_data = {'school': school.id, 'major': major.id}
        response = self.client.put(self.url, data=update_data, partial=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('school').get('id'), school.id)

    def test_api_can_delete_if_exists(self):
        response = self.client.delete(self.url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_api_cannot_delete_if_not_exists(self):
        response = self.client.delete(
            reverse('account:education', kwargs={'pk': 100}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class ScholarshipDetailTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.user = User.objects.get(username='testuser')
        self.scholarship = models.Scholarship.objects.create(
            user=self.user, title='some title', organization='some org')
        self.url = reverse('account:scholarship',
                           kwargs={'pk': self.scholarship.id})

    def test_api_can_retrieve_if_exists(self):
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('id'), self.scholarship.id)

    def test_api_cannot_retrieve_if_not_exists(self):
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(
            reverse('account:scholarship', kwargs={'pk': 100}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_api_can_update(self):
        update_data = {
            'user': self.user.id,
            'title': 'update title',
            'organization': 'update org'
        }
        response = self.client.put(self.url, data=update_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('title'), update_data['title'])

    def test_api_can_partial_update(self):
        update_data = {'title': 'update title', 'organization': 'update org'}
        response = self.client.put(self.url, data=update_data, partial=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('title'), update_data['title'])

    def test_api_can_delete_if_exists(self):
        response = self.client.delete(self.url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_api_cannot_delete_if_not_exists(self):
        response = self.client.delete(
            reverse('account:scholarship', kwargs={'pk': 100}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class SocialLinkDetailTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.user = User.objects.get(username='testuser')
        self.social_link = models.SocialLink.objects.create(
            user=self.user, title='some title', url='http://something.com')
        self.url = reverse('account:social-link',
                           kwargs={'pk': self.social_link.id})

    def test_api_can_retrieve_if_exists(self):
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('id'), self.social_link.id)

    def test_api_cannot_retrieve_if_not_exists(self):
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(
            reverse('account:social-link', kwargs={'pk': 100}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_api_can_update(self):
        update_data = {
            'user': self.user.id,
            'title': 'update title',
            'url': 'http://other.com'
        }
        response = self.client.put(self.url, data=update_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('title'), update_data['title'])

    def test_api_can_partial_update(self):
        update_data = {'title': 'update title', 'url': 'http://other.com'}
        response = self.client.put(self.url, data=update_data, partial=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('title'), update_data['title'])

    def test_api_can_delete_if_exists(self):
        response = self.client.delete(self.url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_api_cannot_delete_if_not_exists(self):
        response = self.client.delete(
            reverse('account:social-link', kwargs={'pk': 100}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class EducationDetailTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.user = User.objects.get(username='testuser')
        self.work = models.WorkExperience.objects.create(
            user=self.user, company='some company', position='some position')
        self.url = reverse('account:work',
                           kwargs={'pk': self.work.id})

    def test_api_can_retrieve_if_exists(self):
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('id'), self.work.id)

    def test_api_cannot_retrieve_if_not_exists(self):
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(
            reverse('account:work', kwargs={'pk': 100}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_api_can_update(self):
        update_data = {
            'user': self.user.id,
            'company': 'update company',
            'position': 'update position'
        }
        response = self.client.put(self.url, data=update_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('id'), self.work.id)
        self.assertEqual(response.data.get('company'), update_data['company'])

    def test_api_can_partial_update(self):
        update_data = {'company': 'update company',
                       'position': 'update position'}
        response = self.client.put(self.url, data=update_data, partial=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('company'), update_data['company'])

    def test_api_can_delete_if_exists(self):
        response = self.client.delete(self.url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_api_cannot_delete_if_not_exists(self):
        response = self.client.delete(
            reverse('account:work', kwargs={'pk': 100}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class GoalDetailTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.user = User.objects.get(username='testuser')
        self.goal = models.Goal.objects.create(
            user=self.user, body='some goal')
        self.url = reverse('account:goal', kwargs={'pk': self.goal.id})

    def test_api_can_retrieve_if_exists(self):
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('id'), self.goal.id)

    def test_api_cannot_retrieve_if_not_exists(self):
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(
            reverse('account:goal', kwargs={'pk': 100}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_api_cannot_update(self):
        response = self.client.put(self.url)
        self.assertEqual(response.status_code,
                         status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_api_can_delete_if_exists(self):
        response = self.client.delete(self.url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_api_cannot_delete_if_not_exists(self):
        response = self.client.delete(
            reverse('account:goal', kwargs={'pk': 100}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class StudyInterestDetailTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.user = User.objects.get(username='testuser')
        self.study_interest = models.StudyInterest.objects.create(
            user=self.user, body='some study interest')
        self.url = reverse('account:study-interest',
                           kwargs={'pk': self.study_interest.id})

    def test_api_can_retrieve_if_exists(self):
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('id'), self.study_interest.id)

    def test_api_cannot_retrieve_if_not_exists(self):
        self.url = '{}?account={}'.format(self.url, self.user.id)
        response = self.client.get(
            reverse('account:study-interest', kwargs={'pk': 100}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_api_cannot_update(self):
        response = self.client.put(self.url)
        self.assertEqual(response.status_code,
                         status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_api_can_delete_if_exists(self):
        response = self.client.delete(self.url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_api_cannot_delete_if_not_exists(self):
        response = self.client.delete(
            reverse('account:study-interest', kwargs={'pk': 100}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class FollowTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        another_user = User.objects.create(
            username='anotheruser', password='anotherpass')
        self.user = User.objects.get(username='testuser')
        self.url = reverse('account:follow', kwargs={'pk': another_user.id})

    def test_api_create_follow(self):
        self.assertEqual(models.Follow.objects.count(), 0)
        response = self.client.post(self.url)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(models.Follow.objects.count(), 1)


class UnfollowTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.user = User.objects.get(username='testuser')
        another_user = User.objects.create(
            username='anotheruser', password='anotherpass')
        follow = models.Follow.objects.create(
            follower=self.user, followed=another_user)
        self.url = reverse('account:unfollow', kwargs={'pk': another_user.id})

    def test_api_can_delete_if_exists(self):
        self.assertEqual(models.Follow.objects.count(), 1)
        response = self.client.delete(self.url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(models.Follow.objects.count(), 0)

    def test_api_cannot_delete_if_not_exists(self):
        response = self.client.delete(
            reverse('account:unfollow', kwargs={'pk': 100}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
