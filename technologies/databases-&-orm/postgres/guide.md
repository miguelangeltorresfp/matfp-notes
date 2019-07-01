# POSTGRE GUIDE

* Para arrancar el servidor de Postgres se hace con el sofware pgAdmin
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
