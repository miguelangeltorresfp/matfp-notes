# GITFLOW TUTORIALS

* A successful Git branching model - Vincent Driessen - [LINK](https://nvie.com/posts/a-successful-git-branching-model/)

* Aprende GIT  
  * ¿Qué es git-flow? - [LINK](http://aprendegit.com/que-es-git-flow/)
  * Organizando las ramas en carpetas - [LINK](http://aprendegit.com/organizando-las-ramas-en-carpetas/)
  * git-flow: la rama develop y uso de feature branches - [LINK](http://aprendegit.com/git-flow-la-rama-develop-y-uso-de-feature-branches/)

* Learn complete Gitflow Workflow basics how to — from start to finish - [LINK](https://medium.com/@devmrin/learn-complete-gitflow-workflow-basics-how-to-from-start-to-finish-8756ad5b7394)

* Gitflow – Qué es, y como usarlo - [LINK](http://edgardvilchez.blogspot.com/2017/12/gitflow-que-es-y-como-usarlo.html)

## Miscelaneous

* `git flow feature` - Muestra todas las ramas de tipo feature

## Init GITFLOW

```bash
git init
git-flow init
```

o bien

```bash
 git branch develop  
 git push origin develop
 ```

 ----------------------------

### Como empezar una rama de característica
  
* Sin la extensión git-flow

```bash
git checkout develop  
git checkout –b nombre_caracteristica
```

o bien ->

```bash  
git checkout –b nombre_caracteristica develop
```

* Con la extensión git-flow

```bash
git flow feature start nombre_caracteristica
```

### Como terminar una rama de característica
  
* Sin la extensión git-flow

```bash
git checkout develop
git merge --no-ff feature-H-1
```

* Con la extensión git-flow

```bash
git flow feature finish nombre_caracteristica
```

----------------------------

### Como empezar una rama de lanzamiento
  
* Sin la extensión git-flow

```bash
git checkout develop  
git checkout –b release/0.1.0
```

* Con la extensión git-flow

```bash
git flow release start 0.1.0
```

### Como terminar una rama de lanzamiento
  
* Sin la extensión git-flow

```bash
git checkout develop  
git merge release/0.1.0  
git checkout master  
git checkout merge release/0.1.0
```

* Con la extensión git-flow

```bash
git flow release finish 0.1.0
```

----------------------------

### Como empezar una rama de hotfix
  
* Sin la extensión git-flow

```bash
git checkout master  
git checkout –b nombre_parche
```

* Con la extensión git-flow

```bash
git flow hotfix start nombre_parche
```

### Como terminar una rama de hotfix
  
* Sin la extensión git-flow

```bash
git checkout master  
git merge nombre_parche
git checkout develop  
git merge nombre_parche  
git branch –D nombre_parche
```

* Con la extensión git-flow

```bash
git flow hotfix finish nombre_parche
```

----------------------------
