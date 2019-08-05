# Clean out your Docker images, containers and volumes with single commands

[LINK](https://medium.com/the-code-review/clean-out-your-docker-images-containers-and-volumes-with-single-commands-b8e38253c271)

```sh
docker container ls - docker ps
docker image ls - docker images
docker volume ls
docker network ls
docker info
```

`docker system prune --all --force --volumes`

```sh
docker container prune # Remove all stopped containers
docker volume prune # Remove all unused volumes
docker image prune # Remove unused images
```
