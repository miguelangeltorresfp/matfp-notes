# NEXT.JS ENVIRONMENT VARIABLES

* Si se usa docker solo hay dos formas de pasar las variables de entorno:
* [link](https://stackoverflow.com/questions/53266814/next-js-pass-node-env-to-client)

## Runtime configuration

[LINK](https://github.com/zeit/next.js#runtime-configuration)
[LINK](https://github.com/zeit/next.js/tree/canary/examples/with-universal-configuration-runtime)


## Add runtime environment variables through next.config.js

* Las variables en local se cargan a través de dotenv desde el archivo .env
* En el servidor las carga Heroku introduciéndolas en la interfaz gráfica.

[link](https://vsupalov.com/docker-arg-env-variable-guide/)