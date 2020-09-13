# GUIDE - LERNA

* Para crear un paquete usando lerna: `lerna create package-name`

* To create a package con una dependencia de otro paquete:
  // Let's create adding our tokens package as dependency
  `lerna create mono-ds-components --dependencies mono-ds-tokens`

* Adding a Local Sibling Dependency to a Specific Package
  `lerna add @my-scope-name/dependency-package --scope=@my-scope-name/specific-package`

* Install react as a dependency into all packages: `lerna add react`

* Install react as a dependency only to a particular package: `lerna add react --scope=my-package`

* Remove a dependency from all packages: `lerna exec -- yarn remove dep-name`

* To run a script on all packages: `lerna run test --stream`
  The --stream flat just provides output from the child process

## Differences between run & exec

* lerna run ejecuta un script determinado en los paquetes en los que esté definido dentro de package.json.
* lerna exec ejecuta el comando que se le pase en todos los paquetes.
* Ambos comandos pueden recibir opciones:
  * --scope=<packages>
  * --ignore=<packages>

* Podemos filtrar en qué paquetes queremos ejecutar un script:

```bash
"scripts": {
    "test": "lerna exec yarn test“
  }

  yarn test --scope @my-company-services/*
  yarn test --scope @my-company/web-*
```

## Versioning the monorepo

* Hay dos modos:
  * independent
  * fix/locked

## Publishing

* `lerna publish`

* With the conventional commits standard: [link](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
  `lerna publish --conventional-commits --yes`

```bash
// lerna.json
...
"command": {
    "publish": {
       "conventionalCommits": true,
       "yes": true // Skips all confirmation prompts
    }
}
...
```

* Más sobre publishing and versioning in this post: A Beginner's Guide to Lerna with Yarn Workspaces - [link](https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d)

## TYPESCRIPT BUILD

* [LINK](https://medium.com/@NiGhTTraX/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559)

### WITH LERNA RUN BUILD

* Para asegurar que se compilan en el orden adecuado se puede hacer usando `lerna run` o bien usando `project references`.

* Si vamos a publicar es mejor compilar todos los paquetes antes y luego ejecutar `lerna publish`
  No confiar en `prepublishOnly`, porque publish no respeta el orden topológico y `prepublishOnly` no se ejecuta para las dependencias.
  Por tanto sería:
  `lerna run build` y luego `lerna publish`

### WITH PROJECT REFERENCES
  
* Hay que modificar el archivo `tsconfig.build.json` indicando `composite:true` en los archivos de los paquetes implicados y luego en el del archivo principal indicar la dependencia:

```bash
 "references": [{
    "path": "../foo/tsconfig.build.json"
  }],
```

* Luego indicar el script que se ejecuta desde package.json: `tsc -b tsconfig.build.json`
