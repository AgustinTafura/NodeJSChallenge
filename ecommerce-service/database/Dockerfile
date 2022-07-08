# Use the official Mysql image.
# https://hub.docker.com/_/mysql
FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD root
ENV MYSQL_DATABASE clean_architecture_example

ADD script.sql /docker-entrypoint-initdb.d/script.sql

RUN ls /var/lib/mysql

EXPOSE 3306