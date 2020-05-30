FROM python:3.7

ADD . /usr/src/backend

WORKDIR /usr/src/backend

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

CMD exec daphne alumate_api.asgi:application -b 0.0.0.0 -p 8000