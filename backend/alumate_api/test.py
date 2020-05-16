from rest_framework.test import APIClient


def get_auth_client():
    user_data = {"username": "testuser", "password": "fortesting"}
    client = APIClient()
    user_response = client.post('/api/auth/users/', user_data)
    jwt_response = client.post('/api/auth/jwt/create/', user_data)
    client.credentials(HTTP_AUTHORIZATION='Bearer ' +
                       jwt_response.data['access'])
    return client
