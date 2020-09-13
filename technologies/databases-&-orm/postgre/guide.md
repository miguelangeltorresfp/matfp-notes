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

## RESTORE BASE DE DATOS

* No funcionaron las variables de entorno con lo que al final tuve que poner la ruta completa del comando:
  `“C:\Program Files\PostgreSQL\12\bin\pg_restore" --verbose --clean --no-acl --no-owner -h localhost -U postgres -d my_corporate_site data.dump`
[link](https://sqlbackupandftp.com/blog/how-to-backup-and-restore-postgresql-database)
