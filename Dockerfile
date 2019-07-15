FROM node:10.16.0-jessie

WORKDIR /app

COPY package.json /app/package.json

RUN yarn

COPY . ./

CMD yarn start
