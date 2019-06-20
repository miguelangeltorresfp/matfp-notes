# AZURE TUTORIAL - 

* Conectar con un contenedor que esté ejecutándose para interactuar con él:
  `docker exec -it <container-id> bash`

## VOLUMES

* Crear volumen - `docker volume create [name of volume]`

* Listar volúmenes - `docker volume ls`

* Eliminar volúmenes que no estén en uso - `docker volume prune`

* Eliminar un volumen concreto - `docker volume rm [name of volume]`

* Obtener información sobre un volumen - `docker inspect [name of volume]`

* Montar volumen en un contendor - `docker run -d -p 8000:3000 --name [container-name] --volume [volume-name]:/logs chrisnoring/node`

* `docker run -d -p 8000:3000 --name [container-name] --volume /$(PWD):/app chrisnoring/node`

* Esto podría funcionar también en Windows "%cd%", en vez de $(PWD)
