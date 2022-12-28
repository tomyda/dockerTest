FROM debian:latest

# Install nginx and vim
RUN apt-get update && apt-get install -y nginx && apt-get install -y vim

# Install pocketbase
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    && pip3 install pocketbase
RUN mkdir root/pb
COPY pb /root/pb

# Copy the built Svelte application to the container
COPY dist /usr/share/nginx/html

# Copy the PocketBase & webserver configuration file to tdohe container
COPY pocketbase.conf /etc/nginx/conf.d/pocketbase.conf
COPY frontend.conf /etc/nginx/conf.d/frontend.conf

# Expose the ports for nginx and pocketbase
EXPOSE 80
EXPOSE 8092

CMD ["nginx", "-g", "daemon off;"] && ["/root/pb/pocketbase serve"]