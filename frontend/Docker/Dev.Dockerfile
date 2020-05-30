FROM node:lts-slim

WORKDIR /usr/src/frontend

EXPOSE 4200

CMD [ "npm", "start" ]
