# build process
FROM node:18-alpine AS build-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

# production process
FROM nginx:alpine
WORKDIR /usr/share/nginx/html/
RUN rm -rf ./*
COPY --from=build-deps /app/build .
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
