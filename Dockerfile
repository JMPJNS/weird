FROM node:12
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

WORKDIR /usr/src/app/web

COPY web/package*.json ./
RUN npm install



RUN npm run build

WORKDIR /usr/src/app

COPY . .
EXPOSE 5000


CMD ["npm", "run start"]