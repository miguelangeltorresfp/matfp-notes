# MONGODB - INSTALL ON WINDOWS

* MongoDB instalación en Windows 10 - by Fazt - [LINK](https://www.youtube.com/watch?v=2KMQdqDk9e8)
  * agregar la carpeta bin a las variables de entorno
  * agregar 'data/db' al directorio 'C'

* The --dbpath parameter in MongoDB will allow you to control what directory MongoDB reads and writes it's data from
  `mongod --dbpath /usr/local/mongodb-data`

* Archivo de configuración
  * [LINK](https://stackoverflow.com/questions/24772428/configuring-mongodb-on-windows)

Ejecutar: `mongod --config c:/tools/mongodb/db/mongod.cfg`

```bash
systemLog:
  destination: file
  path: "C:\\tools\\mongodb\\db\\log\\mongo.log"
  logAppend: true
storage:
  dbPath: "C:\\tools\\mongodb\\db\\data"
security:
  authorization: enabled
```
