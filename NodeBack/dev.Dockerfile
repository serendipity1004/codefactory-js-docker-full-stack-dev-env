FROM node:12-alpine

# work directory
WORKDIR /usr/app

# Copy dependencies first for effective caching
COPY package*.json ./

RUN yarn \
    && yarn global add nodemon \
    && apk add tzdata

COPY . .

CMD ["npm", "run", "dev"]
