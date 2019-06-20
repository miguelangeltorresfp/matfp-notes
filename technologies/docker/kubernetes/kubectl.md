# KUBECTL COMMANDS GUIDE

* Para crear un pod a partir de un archivo - `kubectl apply -f client-pod.yaml`
* Para cargar crear todos los objetos relativos a todos los archivos de configuración dentro de una carpeta o directorio se hace con el nombre o ruta de dicho directorio : `kubectl apply -f k8s`
* Para obtener el 'status' de los pods creados - `kubectl get pods`
* Para obtener el 'status' de los services creados - `kubectl get services`
* Para obtener el 'status' de los objetos de tipo secrets - `kubectl get secrets`
* Para obtener más información - `kubectl get pods -o wide`
* Para obtener información sobre los volumenes - `kubectl get vc` - `kubectl get pvc`
* To get information about a kind of object inside of a cluster - `kubectl describe pod`
* We usually use the full command with the name of a particular object - `kubectl describe pod client-pod`
* Para borrar un objecto se hace igual que para crearlo - `kubectl delete -f client-pod.yaml`
* O por ejemplo `kubectl delete deployment client-deployment`

## Para actualizar la imagen con la que se construye un contenedor primero se construye esa imagen con una versión concreta en el tag y luego se sube al registry:

`docker build -t miguelangeltorresfp/multi-client:v5 .`
`docker push miguelangeltorresfp/multi-client:v5`

* Luego se actualiza la versión de los contenedores dentro de los clusters de una manera imperativa.

`kubectl set image deployment/client-deployment client=miguelangeltorresfp/multi-client:v5`

## Se puede usar Kubectl para interaccionar con los contenedores de una forma parecida a los comandos de docker-cli

* Primero podemos obtener el nombre del contenedor con `kubectl get pods`
* Luego, usando ese nombre podemos por ejemplo obtener los logs del contenedor o ejecutar un shell dentro del contenedor :
    `kubectl logs <container-name>`
    `kubectl exec -it <container-name> sh`

## Manage Storage

`kubectl get storageclass`
`kubectl describe storageclass`

## CREATE OBJECT IN A IMPERATIVE WAY

* SECRET - generic, tls, docker-registry
`kubectl create secret generic pgpassword --from-literal PGPASSWORD=1234asdf`

* Set replicas
`kubectl scale --replicas=0`