FROM node:22.12.0

WORKDIR /usr/src/app

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm","run","dev"]