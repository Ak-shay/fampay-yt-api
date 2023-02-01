FROM node:18

WORKDIR /fampay-app
COPY package.json .
RUN npm install
COPY . .
CMD node app