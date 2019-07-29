########
# Dockerfile to build Nginx container with HTML-file,
# which has links on screenshots of Git task's results.
# Based on Ubuntu.
########

# Image name
FROM ubuntu:14.04

# Specify the author
MAINTAINER FaNaTiCo

# Install nginx
RUN apt-get update \
    && apt-get install -y software-properties-common \
    && apt-add-repository -y ppa:nginx/stable \
    && apt-get install -y nginx \
    && rm -rf /var/lib/apt/lists/*

# Copy all files to the image folder 
COPY nginx.conf /etc/nginx/
COPY document /document
COPY screenshots /screenshots

# Run Nginx after running the image
CMD ["nginx", "-g", "daemon off;"]

# Forward the port of the image
EXPOSE 30000