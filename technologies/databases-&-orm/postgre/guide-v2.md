# GUIDE V2

* Siguiendo este videotutorial: [Getting Started with PostgreSQL 11 for Windows 10 | 2020](https://www.youtube.com/watch?v=BLH3s5eTL4Y)

* Instalé Postgre usando simplemente el instalador - [link](https://www.postgresql.org/download/)

* Indiqué una contraseña fácil para el admin user en el mismo proceso de instalación

* luego ejecuté la consola de postgre `psql`, buscándola con el buscador de windows inicio o en el directorio de la instación de PostgreSQL
  Tuve que ejecutarla como administrador para poder loguearme en el servidor de Postgre, si no daba error.

## Comandos en psql

* Listar ayuda: `help`

* Listar bases de datos: `\l`

* Crear base de datos: `CREATE DATABASE test`
  No admite guiones: `my-corporate-site`
  Tendrían que ser guiones bajos: `my_corporate_site`

* Se puede volver a iniciar la consola para conectarse a la base de datos recién creada, las credenciales son las mismas.

* Crear tabla: `CREATE TABLE person`
  Se pueden crear los campos directamente:

```bash
CREATE TABLE person (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  country VARCHAR(50) NOT NULL );
```

* Para ver la table: `\d`
* Para ver el contenido: `\dt`
* DELETE TABLE: `DELETE TABLE person;`

* Insert rows: `INSERT INTO person (name, country) VALUES ('Amigoscode', 'UK');`

* SELECT: `SELECT * FROM person;`

* SELECT COUNT: `SELECT COUNT(id) FROM person;`

* UPDATE: `UPDATE person SET name = 'Antonio' WHERE id = 1;`

* DELETE ROW: `DELETE FROM person WHERE id = 1;`

* EXPAND FORMAT: `\x` y para quitar este formato se vuelve a poner `\x`

* EXCUTE COMMANDO FROM FILES:

