# Deploying ReactJS With Docker

## by Manny Coles on Medium - [LINK](https://medium.com/@mannycodes/deploying-reactjs-with-docker-ac16728c0896)

## 1 CLONE CREATE REACT APP

```bash
npx create-react-app reactdocker
cd reactdocker
npm start
```

## 2 CREATING THE ENVIRONMENT

```bash
docker run -it -p 3000:3000 -p 80:80 -v $PWD:/var/www/localhost/htdocs --name reactdocker alpine /bin/sh
```

* En windows parece que falla $PWD - hay que escapar el path al working directory con /$PWD
* Y tampoco se puede usar /bin/sh

```bash
docker run -it -p 3000:3000 -p 80:80 -v /$PWD:/var/www/localhost/htdocs --name reactdocker alpine
```

* Install Nodejs y NPM

```bash
apk add nodejs
apk add npm
```

* Install de dependencies and start de server

```bash
npm install
npm start
```

* Stop the server & build

```bash
# press ctrl + c
npm run build
```

* Install NGINX & Configure it

```bash
apk add nginx
# add nano to edit the file
apk add nano
# modify the nginx default.conf file
nano /etc/nginx/conf.d/default.conf
```

```bash
server {
  listen 80 default_server;
  listen [::]:80 default_server;
  location / {
          root   /var/www/localhost/htdocs/build;
          # this will make so all routes will lead to
          # index.html so that react handles the routes
          try_files $uri $uri/ /index.html;
  }
  # You may need this to prevent return 404 recursion.
  location = /404.html {
          internal;
  }
}
```

* Test the configuration file and start the server

```bash
nginx -t
# [Expected Output]
# nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
# nginx: configuration file /etc/nginx/nginx.conf test is successful
nginx
```

## 3 CREATE DOCKERFILE

```bash
# create a new config directory
mkdir config;
# copy default.conf to config/default.conf
docker cp reactdocker:/etc/nginx/conf.d/default.conf config/default.conf;
# now we can destroy the container
docker rm -f reactdocker;
```

```bash
FROM alpine
EXPOSE 80
ADD config/default.conf /etc/nginx/conf.d/default.conf
COPY . /var/www/localhost/htdocs
RUN apk add nginx && \
    mkdir /run/nginx && \
    apk add nodejs && \
    apk add npm && \
    cd /var/www/localhost/htdocs && \
    rm -rf node_modules && \
    npm install && \
    npm run build;
CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;';"]
WORKDIR /var/www/localhost/htdocs
```

```bash
# build it
docker build . -t reactdocker
# run the container
docker run -it -d -p 80:80 --name rdocker reactdocker
```

## 4 OPTIMIZE DOCKER IMAGE

```bash
FROM alpine
EXPOSE 80
ADD config/default.conf /etc/nginx/conf.d/default.conf
COPY . /var/www/localhost/htdocs
RUN apk add nginx && \
    mkdir /run/nginx && \
    apk add nodejs && \
    apk add npm && \
    cd /var/www/localhost/htdocs && \
    npm install && \
    npm run build && \
    apk del nodejs && \
    apk del npm && \
    mv /var/www/localhost/htdocs/build /var/www/localhost && \
    cd /var/www/localhost/htdocs && \
    rm -rf * && \
    mv /var/www/localhost/build /var/www/localhost/htdocs;
CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;';"]
WORKDIR /var/www/localhost/htdocs
```

* Compare size to the container before and after optimization

```bash
docker images | grep "reactdocker";
# [Expected Output]
# reactdocker   latest  3c160b1a5941  16 minutes ago  489MB
```

```bash
docker images | grep "reactdocker";
# [Expected Output]
# reactdocker   latest  669c991b23b6  20 seconds ago  36.6MB
```

* PUSH IT TO DOCKER HUB

```bash
docker tag reactdocker {docker-hub-username}/reactdocker;
docker push {docker-hub-username}/reactdocker;
```

## Create Docker Digital Ocean Droplet

## Deploy Container

```bash
# replace this droplet IP address with yours
ssh root@142.93.153.135;
docker run -it -d -p 80:80 --name rdocker {docker-hub-username}/reactdocker;
```
