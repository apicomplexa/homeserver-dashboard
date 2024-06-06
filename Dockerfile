FROM nginx:alpine
WORKDIR /app
COPY ./build .
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
