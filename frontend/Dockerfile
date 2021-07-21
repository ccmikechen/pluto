FROM node:14-alpine as dev
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
CMD [ "yarn", "start" ]
