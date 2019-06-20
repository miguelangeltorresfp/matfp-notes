# DOCKERS ON WINDOWS

* It's necessary to escape the path `${PWD} => /${PWD}`
  * [LINK](https://stackoverflow.com/questions/50608301/docker-mounted-volume-adds-c-to-end-of-windows-path-when-translating-from-linux)

* **Native** - Romin Irani on Medium - [Docker on Windows — Mounting Host Directories](https://rominirani.com/docker-on-windows-mounting-host-directories-d96f3f056a2c)  

* **Toolbox** - How to use a directory outside C:\Users with Docker Toolbox/Docker for Windows [link](http://support.divio.com/local-development/docker/how-to-use-a-directory-outside-cusers-with-docker-toolboxdocker-for-windows)

--------------------------------------

## DOCKER ON WINDOWS PRO

* In order to let share volumes, it is necessary to setup Shared Drives on DOCKER GUI ( mouse right button on icon )

  As it asks for an administrator credential and his password we could creat a new user with administrator priviledge and a password. [LINK](https://forums.docker.com/t/how-to-share-windows-drives-with-a-user-without-password/22933/3)

* Docker mounted volume adds ;C to end of windows path when translating from linux style path - [LINK](https://stackoverflow.com/questions/50608301/docker-mounted-volume-adds-c-to-end-of-windows-path-when-translating-from-linux)
/${PWD}
`docker run -it --rm -v /${PWD}:/wkDir $IMAGE_TAG yarn dev`

## Para solucionar el problema de que no se actualiza el navegador cuando se hacen cambias en los archivos hay que añadir esta variable de entorno:
( También existe una librería que aun no he usado [LINK](https://github.com/merofeev/docker-windows-volume-watcher))

```bash
  "scripts": {
    "start": "CHOKIDAR_USEPOLLING=true react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

* [LINK](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-start-doesn-t-detect-changes)
* [LINK](https://stackoverflow.com/questions/53938476/cant-get-webpack-hotreload-with-create-react-app-and-docker-windows)
* [LINK](https://webpack.js.org/configuration/watch/#watchoptions-poll)

* Setting up vscode to use the docker extension with bash for windows as terminal shell - [LINK](https://blogs.msdn.microsoft.com/manibindra/2017/11/01/setting-up-vscode-to-use-the-docker-extension-with-bash-for-windows-as-terminal-shell/)