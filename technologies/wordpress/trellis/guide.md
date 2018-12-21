# TRELLIS GUIDE

## Install vagrant-bindfs plugin

* `vagrant plugin install vagrant-bindfs` - [LINK](https://github.com/gael-ian/vagrant-bindfs)

## Install vagrant-winnfsd plugin

* `vagrant plugin install vagrant-winnfsd` - [LINK](https://github.com/winnfsd/vagrant-winnfsd)
* De momento no funciona el compartir carpetas con el método nfs o smb, así que hay que desinstalar este plugin para que funcione en Windows 10 Pro.

## Install vagrant-hostmanager plugin

* `vagrant plugin install vagrant-hostmanager` - [LINK](https://github.com/devopsgroup-io/vagrant-hostmanager)

## Crear proyecto en Roots - Trellis - Bedrock - [LINK](http://chrisknightindustries.com/2015/11/24/git-subtrees-for-trellis-workflow.html)

1 - Se crea proyecto en repo remoto - ( Gitlab, Github, Bitbucket )

2 - Se inicializa el repo local :

  ```bash
  git init
  git remote add origin git@bitbucket.org:miguelangeltorresfp/ecommfashion.es.git
  touch .gitignore
  git add .
  git commit -m "initial commit"
  ```

3 - Se clonan los repos de Roots ( Trellis, Bedrock y Sage )

Trellis

```bash
git remote add trellis https://github.com/roots/trellis.git
git fetch trellis
git checkout -b trellis trellis/master
git checkout master
git read-tree --prefix=trellis/ -u trellis/master
git commit -m "add trellis subtree"
```

Bedrock

```bash
git remote add bedrock https://github.com/roots/bedrock.git
git fetch bedrock
git checkout -b bedrock bedrock/master
git checkout master
git read-tree --prefix=site/ -u bedrock/master
git commit -m "add bedrock subtree"
```

Sage

```bash
git remote add sage https://github.com/roots/sage.git
git fetch sage
git checkout -b sage sage/master
git checkout master
git read-tree --prefix=site/web/app/themes/sage -u sage/master
git commit -m "add sage subtree"
```

4 - Desde el directorio "site" -> `compsoser install`
  
* Antes hay que instalar PHP y Composer
* [LINK](http://kizu514.com/blog/install-php7-and-composer-on-windows-10/)

5 - Ajustar variables en wordpress_site.yml y vault.yml ( Development, Production, Staging )

6 - Copiar el archivo vagrantfile que añade la sincronización de base de datos

7 - Crear el directorio database

8 - Desconectar el firewall, antivira, para que se pueda escribir en el archivo host la dirección de la web

9 - Ampliar memoria para la VM en el archivo vagrant-default - [LINK](https://medium.com/@payter/how-to-setup-trellis-wordpress-installation-on-windows-for-php-storm-easiest-setup-7cafb570559f)

* En trellis/vagrant-default -> vagrant_memory:4096
* En trellis/vagrant-default -> vagrant_cpus: 2

10 - Set ip address at the top of the vagrant.default.yml file to allow for multiple boxes to be run concurrently.
  
* Change too in /hosts/development

11 - Change Hyper-V to Off - `bcdedit /set hypervisorlaunchtype off` - to work with Virtualbox - Vagrant

12 - Implementar todo el tema de seguridad antes de hacer commit para no subir las contraseñas sin encriptar al repositorio.

13 - Hacer commit para poder luego empezar con el proceso de deploy.
