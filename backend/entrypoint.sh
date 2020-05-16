#!/bin/sh

# if [ "$DATABASE" = "postgres" ]
# then
#     echo "Waiting for postgres..."

#     while ! nc -z $SQL_HOST $SQL_PORT; do
#       sleep 0.1
#     done

#     echo "PostgreSQL started"
# fi

python manage.py flush --no-input
python manage.py migrate


# load dataset
python manage.py loaddata country.json --app account
python manage.py loaddata university.json --app account
python manage.py loaddata major.json --app account

# load mock users for development
python manage.py loaddata dev_user.json --app user
python manage.py loaddata mock_user.json --app user
python manage.py loaddata mock_basic_info.json --app account


exec "$@"
