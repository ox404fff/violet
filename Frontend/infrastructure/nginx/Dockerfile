FROM nginx:latest

ARG BUILD_NUMBER

COPY infrastructure/nginx/default.conf /etc/nginx/conf.d

RUN sed -i "s/---PHP_FPM_INSTANCE_NAME---/violet-drupal-${BUILD_NUMBER}:9000/" /etc/nginx/conf.d/default.conf

COPY dist /app/dist

WORKDIR /app
