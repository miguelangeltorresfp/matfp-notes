# DOCKERFILE

* WORKDIR - Crea automáticamente el directorio que indiquemos dentro del contenedor y luego usa este directorio para ejecutar los siguientes comandos, RUN, CMD, ENTRYPOINT, COPY and ADD. [LINK](https://stackoverflow.com/questions/51066146/what-is-the-point-of-using-workdir-command-in-dockerfile)

* USAR YARN - [link](https://github.com/yarnpkg/yarn/issues/749)

```bash
COPY package.json yarn.lock ./
RUN yarn --pure-lockfile
```
