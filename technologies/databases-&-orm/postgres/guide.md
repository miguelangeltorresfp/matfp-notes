# POSTGRE GUIDE

## Deshabilitar el inicio del servicio automático que inicia el servidor de la base de datos

* Desde el menú de inicio, en la caja de búsqueda, escribí services.
* Se busca el servicio correspondiente y se pulsa en propiedades.
* Estaba en automático, lo deshabilité y luego lo detuve.

[LINK](https://serverfault.com/questions/311565/stop-postgresql-from-starting-on-windows)

## Iniciar servidor con docker-compose

## Conexión con el servidor de Postgres ( servicio )

* Para conectar con el servidor de Postgres se hace con el software pgAdmin
  * Solicita la contraseña - `postgres`
* Hay que crear un usuario
`psql --help`
`psql -U myuser`

`\q` - To EXIT

## Crear y eliminar una base de datos asignándosela a un usuario como dueño

* `createdb -U postgres dbname`
* `dropdb -U postgres dbname`

## Crear un usuario interactivamente desde bash

* `createuser --interactive --pwprompt`

## Entrar al command line con un usuario concreto desde bash

* `psql -U postgres`
