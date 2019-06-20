# MINIKUBE TUTORIALS

* Hay que ejecutar Visual Studio Code como administrador para poder trabajar sin problemas con minikube

* Good tutorial from Romin Irani - [LINK](https://rominirani.com/tutorial-getting-started-with-kubernetes-on-your-windows-laptop-with-minikube-3269b54a226)

* Commands Guide - [LINK](https://dzone.com/articles/kubernetes-local-development-with-minikube-on-hype)

* Get minikube VM IP - `minikube ip`

## Configure our shell to work to docker server inside minikube

* Esto podría ser útil para gestionar los contenedores, eliminar alguno para forzar a que se reinicialice o para eliminar las imágenes guardadas en la caché con :
  `docker system prune -a`

[LINK](https://medium.com/@maumribeiro/running-your-own-docker-images-in-minikube-for-windows-ea7383d931f6)

```sh
minikube docker-env // only to get info
minikube docker-env | Invoke-Expression
```

## Resetting and restarting your cluster

If you want to wipe out your local Minikube cluster and restart, it is very easy to do so. Issuing a command to delete and then start Minikube will wipe out the environment and reset it to a blank slate:

`minikube delete`
`minikube start`
