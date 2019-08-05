# DOCKER-COMPOSE GUIDE

* docker-compose up doesn't rebuild image although Dockerfile has changed
* [LINK](https://github.com/docker/compose/issues/1487)

`docker-compose build`

`docker-compose up -d`

`docker-compose stop`

`docker-compose down` - it stops and removes the container

`docker-compose up --force-recreate`
`docker-compose up --build`

## DOCKER VS DOCKER-COMPOSE COMMANDS [LINK](https://dev.to/azure/docker-from-the-beginning-partiv-mi6)

`docker build` => `docker-compose build`

`docker build + docker run` => `docker-compose up`

`docker stop` => `docker-compose stop`

`docker stop && docker rm` => `docker-compose down`

## How to rebuild docker container in docker-compose.yml? [LINK](https://stackoverflow.com/questions/36884991/how-to-rebuild-docker-container-in-docker-compose-yml)

`docker-compose build --no-cache service1 service2`
`docker-compose up --build --no-cache service1 service2`

* To see what environment variables are available to the web service:
`docker-compose run web env`

* Attach logs después de haber iniciado los servicios ( en este caso indicando un archivo concreto docker-compose.dev.yml )

```bash
docker-compose -f docker-compose.dev.yml up -d
docker-compose -f docker-compose.dev.yml logs -f
```
