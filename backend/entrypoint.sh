#!/bin/sh

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

python manage.py runserver 0.0.0.0:8000

exec "$@"
