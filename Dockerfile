# 1. For build React app
FROM node:14.15.4-buster-slim as builder

LABEL maintainer="Le Ngoc Phu <phuln6@fpt.com.vn>"

WORKDIR /s3-fe

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm install

COPY . /s3-fe

CMD [ "npm", "start" ]

RUN npm run build

# 2. For Nginx setup
FROM nginx:alpine
COPY --from=builder /s3-fe/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /s3-fe/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# TUTORIAL RUN
# docker build -t s3-fe:v1 -f docker-file .
# docker rmi -f s3-fe:v1

# TEST
# docker run -it s3-fe:v1 bash
# docker run -p 3000:3000 s3-fe:v1
