# build process
FROM node
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
CMD ["yarn", "start"]
