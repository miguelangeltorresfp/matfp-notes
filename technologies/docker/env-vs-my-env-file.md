# Differences between .env file and a custom-env-file

How to get port of docker-compose from env_file? - [link](https://stackoverflow.com/questions/52664673/how-to-get-port-of-docker-compose-from-env-file)

* We define PORT in the .env file which is used during the compose "build"
* The custom-env-file define env variables only for the docker container itself

* .env file:

`PORT=5000`

* custom-env-file

```bash
POSTGRES_USER=dev
POSTGRES_PASSWORD=secret
POSTGRES_DB=db
```

* docker-compose.yml

```bash
version: '3'
services:
  flask:
    build:
      context: ./flask
      dockerfile: Dockerfile_flask
    ports:
     #- "5000:5000"
     - "${PORT}:${PORT}"  # I want to set port defined in the env file
    volumes:
      - ./logs:/app/flask/log
    restart: always
  postgres:
    image: postgres:9.6
    container_name: postgres
    env_file:
      - my-env-file
    ports:
      - ${PORT}:${PORT}
```
