FROM python:3.7-slim-buster

WORKDIR /usr/src/backend

ENV PYTHONDONTWRITEBYTECODE 1 
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /usr/src/backend/requirements.txt
RUN pip install -r requirements.txt

COPY . /usr/src/backend/

ENTRYPOINT ["/usr/src/backend/entrypoint.sh"]