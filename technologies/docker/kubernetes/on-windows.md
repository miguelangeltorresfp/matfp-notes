# KUBERNETES ON WINDOWS GUIDE

* Seguí este para crear la red externa a la que conectar minikube
 [LINK](https://medium.com/@JockDaRock/minikube-on-windows-10-with-hyper-v-6ef0f4dc158c)

* Guía parecida más actualizada [LINK](https://medium.com/@mudrii/kubernetes-local-development-with-minikube-on-hyper-v-windows-10-75f52ad1ed42)

* `minikube dashboard`

## Problema para apagar minikube con `minikube stop`

* issue [LINK](https://github.com/kubernetes/minikube/issues/2914#issuecomment-401562007)

```sh
$ minikube ssh
$ sudo poweroff
```

## Problema con la diferente versión del cliente de Kubectl y la del servidor. Hay que cambiar el orden de las variables de entorno en el PATH para que aparezca primero el path de "C:\kube" antes del path de docker. Comprobar "C:\where kubectl" que nos mostrará que también hay un ejecutable de kubectl en la carpeta de docker desktop
[LINK](https://stackoverflow.com/questions/54828363/kubectl-update-upgrade-and-view-version-is-not-matching)