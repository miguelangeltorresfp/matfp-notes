# docker-compose.yaml

* Eso posibilita que este servicio espere a que la base de datos esté lista

```sh
services:
 some-service:
   depends_on: db
 db:
   image: mysql
```