FROM node:lts-slim

WORKDIR /usr/src/frontend

COPY ./package.json /usr/src/frontend/package.json
COPY ./package-lock.json /usr/src/frontend/package-lock.json

RUN npm install

COPY . /usr/src/frontend

EXPOSE 4200
