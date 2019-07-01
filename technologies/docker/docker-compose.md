# DOCKER-COMPOSE GUIDE

* docker-compose up doesn't rebuild image although Dockerfile has changed
* [LINK](https://github.com/docker/compose/issues/1487)

`docker-compose down`

`docker-compose up --force-recreate`