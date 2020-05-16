from django.test import TestCase
from rest_framework import status
from . import models, views
from django.urls import reverse
from alumate_api.test import get_auth_client
from django.contrib.auth import get_user_model
User = get_user_model()


class PostCreateTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.url = reverse('post:post-create')

    def test_api_can_create_post(self):
        self.assertEquals(models.Post.objects.count(), 0)
        data = {'body': 'test'}
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(models.Post.objects.count(), 1)
        self.assertEqual(models.Post.objects.get().body, data['body'])


class PostListTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.user = User.objects.get(username='testuser')
        self.url = reverse('post:post-list', kwargs={'pk': self.user.pk})

    def test_api_can_get_posts(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class PostCommentListTestCase(TestCase):

    def setUp(self):
        self.client = get_auth_client()
        self.user = User.objects.get(username='testuser')
        self.post = models.Post.objects.create(user=self.user, body='test')

        self.url = reverse('post:post-comment-list-create',
                           kwargs={'pk': self.post.pk})

    def test_api_can_get_post_comments(self):
        models.PostComment.objects.create(
            user=self.user, post=self.post, body='test')
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_api_can_create_post_comment(self):
        self.assertEqual(models.PostComment.objects.count(), 0)
        data = {'body': 'test'}
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(models.PostComment.objects.count(), 1)
        self.assertEqual(models.PostComment.objects.get().body, data['body'])


class PostLikeTest(TestCase):
    def setUp(self):
        self.client = get_auth_client()
        self.user = User.objects.get(username='testuser')
        self.post = models.Post.objects.create(user=self.user, body='test')

        self.url = reverse('post:post-like-list-create',
                           kwargs={'pk': self.post.pk})

    def test_api_can_get_post_likes(self):
        models.PostLike.objects.create(user=self.user, post=self.post)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_api_can_create_post_like(self):
        self.assertEqual(models.PostLike.objects.count(), 0)
        response = self.client.post(self.url)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(models.PostLike.objects.count(), 1)

    def test_api_create_post_like_twice(self):
        self.assertEqual(models.PostLike.objects.count(), 0)
        response = self.client.post(self.url)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(models.PostLike.objects.count(), 1)
        response = self.client.post(self.url)  # duplicate call
        self.assertEqual(response.status_code, status.HTTP_303_SEE_OTHER)
        # will not create another
        self.assertEqual(models.PostLike.objects.count(), 1)


class PostCommentLikeTest(TestCase):
    def setUp(self):
        self.client = get_auth_client()
        self.user = User.objects.get(username='testuser')
        self.post = models.Post.objects.create(user=self.user, body='test')
        self.post_comment = models.PostComment.objects.create(
            user=self.user, post=self.post, body='test')
        self.url = reverse('post:post-comment-like-list-create',
                           kwargs={'pk': self.post_comment.pk})

    def test_api_can_get_post_comment_likes(self):
        models.PostCommentLike.objects.create(
            user=self.user, comment=self.post_comment)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_api_can_create_post_comment_like(self):
        self.assertEqual(models.PostCommentLike.objects.count(), 0)
        response = self.client.post(self.url)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(models.PostCommentLike.objects.count(), 1)

    def test_api_create_post_comment_like_twice(self):
        self.assertEqual(models.PostCommentLike.objects.count(), 0)
        response = self.client.post(self.url)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(models.PostCommentLike.objects.count(), 1)
        response = self.client.post(self.url)  # duplicate call
        self.assertEqual(response.status_code, status.HTTP_303_SEE_OTHER) 
        # will not create another
        self.assertEqual(models.PostCommentLike.objects.count(), 1)
