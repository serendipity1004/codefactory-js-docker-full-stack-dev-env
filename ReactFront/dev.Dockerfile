FROM node:12-alpine

# work directory
WORKDIR /usr/app

COPY package*.json ./
RUN yarn

COPY . .

CMD ["yarn", "start"]
