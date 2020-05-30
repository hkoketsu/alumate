# build
FROM node:12-alpine as node

WORKDIR /usr/src/frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# publish
FROM nginx:mainline-alpine

COPY --from=node /usr/src/frontend/dist/frontend /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf