FROM node:18.16.0-alpine3.18

RUN mkdir /app

COPY package.json /app
COPY . /app

RUN yarn

CMD ["yarn", "start"]