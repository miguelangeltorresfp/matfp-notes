# DOCKER - BASICS

There are different ways to use containers. These include:

## INFO

* `docker version`
* `docker --version`
* `docker Info`
* `docker container --help`

### CREATE

`docker create [image-name]`

### START

`docker start <id or name\>`

`docker start -a <id or name\>` - Attach and printed out to the host terminal

### RUN

* Por defecto muestra ( log ) toda la información dentro del contenedor, con start hay que poner -a

* docker run = docker create + docker start

* **To run a single task:** This could be a shell script or a custom app.  
* **Interactively:** This connects you to the container similar to the way you SSH into a remote server.
* **In the background:** For long-running services like websites and databases.
* -i - Interactively
* -t - Terminal
  `docker run -ti ubuntu`
* --interactive
* --tty - allocates a pseudo-tty
* --rm - tells Docker to remove the container when it's done executing.

```bash
docker container run \
--detach \
--name mydb \
-e MYSQL_ROOT_PASSWORD=my-secret-pw \
mysql:latest
```

```bash
docker container run \
--detach \
--publish 80:80 \
--name linux_tweet_app \
$DOCKERID/linux_tweet_app:1.0
````

```bash
docker container run \
--detach \
--publish 80:80 \
--name linux_tweet_app \
--mount type=bind,source="$(pwd)",target=/usr/share/nginx/html \
$DOCKERID/linux_tweet_app:1.0
```

## Restarting a container

* `docker start -ai <id>`  
  Changes made inside the container persist through stopping and starting.

## [Naming a docker container] - [LINK](https://www.digitalocean.com/community/tutorials/naming-docker-containers-3-tips-for-beginners)

* When a container is created, it's given an random id and a radom name.

* `docker run --name=meaninful_name`  
  `docker run --name nginx -d nginx`  
  But this name won't appear in the command prompt of the container if you attach to it or in the log files. In order to accomplish that, you'll also need to assign a hostname.

* `docker run --hostname=value`  
  `docker run -h value`  
The container ID is the hostname that the container displayed.
`docker container run alpine hostname`

### LISTS IMAGES & CONTAINERS

* `docker image ls`
  Lists all the images downloaded to your machine
* `docker container ls`
  Lists all the containers running
* `docker container ls --all`  
  Lists all the containers running or not
* `docker container ls -aq`
  Lists all the containers in quiet mode
* `docker ps`  
  Lists all the running containers and their names
* `docker ps -a`  
  Lists all containers, stopped or running
* `docker stop container-id`
  Stop one or more running containers and give 10 seconds to shut down the container
  `SIGTERM`
* `docker kill container-id`
`SIGKILL`
  Kill one or more running containers

### Automatically delete containers when they exit

* `docker run --rm`  
   Be careful, though! If you're using Docker volumes, --rm will remove any volumes NOT specified by name.
* `docker rm <id> ( It coud be several ids )`
* `docker rm --force <id\>`

## LOGS

* `docker container logs <id or name\>`
* `docker container top <id or name\>` - shows the processes running inside the container.

## Run a command inside a container

* `docker exec -it <name\> <command\>`

* `docker exec -it container_name sh`
* `docker exec -it container_name bash`

* See environment variables - `docker exec -it [container name] bash`

## BUILD FROM A DOCKERFILE

* `docker build -t hello-world .`
* Selecciona un archivo concreto para construir la imagen - `docker build -f Dockerfile.dev .`

## BUILD AN IMAGE

* `docker image build --tag DOCKERID/<application_name\>:<version\> .`  
  `docker image build --tag $DOCKERID/linux_tweet_app:1.0 .`
  *DockkerID* allow us to store it on Docker Hub

## EXPOSE es solo para documentar qué puerto tiene que mapearse cuando se ejecuta el contenedor
pero no abre ningún puerto en si mismo.
[LINK](https://stackoverflow.com/questions/22111060/what-is-the-difference-between-expose-and-publish-in-docker)

## Copiar desde un contenedor al directorio del host
[LINK](https://medium.com/@mannycodes/deploying-reactjs-with-docker-ac16728c0896)
`docker cp reactdocker:/etc/nginx/conf.d/default.conf config/default.conf`

## DELETE CONTAINERS ( REMOVE )

* Will kill the process if it is running and remove the container, in one step - `docker rm -f container`