# MONGODDB DATABASE

* Inicializar mongodb en windows -  `mongod`
* Para probar desde otra ventana-consola si se ha almacenado un documento en una colección:

```bash
mongo
show dbs
use database_name
show collections
db.collection_name.find().pretty()
```

* Delete database: `db.dropDatabase()`
* Delete Collection: `db.collection_name.drop()`
