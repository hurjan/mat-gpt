FROM node:20 AS build
 
WORKDIR /app
 
COPY package*.json ./

 
RUN npm install
 
COPY . .

RUN npm run build

FROM httpd:2.4 AS server
COPY ./dist/ /usr/local/apache2/htdocs/
