# Stephen Grider - Udemy Tutorial - Docker and Kubernetes: The Complete Guide

* `docker start -a <container-id>`
  El parámetro -a es para indicar que se muestre el output del log del contenedor en la consola desde la que invocamos el comando.
  Cuando hacemos docker run no es necesario porque esto siempre es así por defecto.

* `docker system prune --all --force --volumes`

* `docker logs <container-id>`

* `docker stop <container-id>` ( 10 seconds to shut down )
* `docker kill <container-id>` ( stop inmediately )

* `docker run redis`
  * `docker exec -it` <container-id> redis-cli
  * `docker exec -it` <container-id> sh

* `docker build -t miguelangeltorresfp/project_name/:latest .`

* Se puede crear una imagen partiendo de un contenedor
* -c es para indicar el commando por defecto que se ejecutará al iniciar el contenedor que se construya usando esta imagen
`docker commit -c 'CMD ["redis-server"]' <container-id>`

* INSTALAR VERSIÓN ALPINE, que significa una versión reducida, por ejemplo : FROM node:alpine

* No usa el archivo .dockerignore y parece que tampoco la opción ENTRYPOINT en la configuración del archivo Dockerfile
  
* Selecciona un archivo concreto para construir la imagen - `docker build -f Dockerfile.dev .`
