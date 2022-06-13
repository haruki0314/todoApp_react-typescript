# FROM node:16.13.0-alpine
# WORKDIR /src
FROM node:16.13.0-alpine3.11
WORKDIR /usr/src/app
RUN npm install react-router-dom @types/react-router-dom
