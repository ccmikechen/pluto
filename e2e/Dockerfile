
FROM cypress/base:14.17.0
WORKDIR /app

ENV CI=1

COPY package.json yarn.lock ./
RUN yarn install

COPY cypress.json docker-entrypoint.sh ./
COPY cypress ./cypress
