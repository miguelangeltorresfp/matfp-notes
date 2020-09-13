# JEST GUIDE

## Update snapshots - `npx jest u`

## CONFIGURATION

### BABEL - babel-jest

* [link](https://jestjs.io/docs/en/tutorial-react)

* Estas serían las dependencias necesarias: `yarn add -D babel-jest @babel/core @babel/preset-env @babel/preset-react`

* Si se instala `babel-jest`, jest automáticamente usará este compilador a menos que se establezan otros preprocesadores en `config.transform`. En este caso para usar `babel-jest` habría que indicarlo explícitamente:

```js
"transform": {
  "^.+\\.[t|j]sx?$": "babel-jest"
},
```

### babel-jest with typescript

* [link](https://jestjs.io/docs/en/getting-started#using-typescript)
* [link](https://jestjs.io/docs/en/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object)
* [link](https://github.com/facebook/jest/tree/master/examples/typescript)

* Para usarlo con typescript se añade esta dependencia: `yarn add --dev @babel/preset-typescript` y se indica su uso en el archivo de configuración de babel:

```js
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
+    '@babel/preset-typescript',
  ],
};
```

### ts-jest

* Dependencias: `yarn add -D jest typescript ts-jest @types/jest`

### EJEMPLOS

* [jest/examples/typescript/](https://github.com/facebook/jest/tree/master/examples/typescript)

## CON CREATE-REACT-APP

* Solución para el problema de correr jest de forma interactiva cuando lo ejecutas en una app creada con create-react-app

```bash
  "scripts": {
    "start": "CHOKIDAR_USEPOLLING=true react-scripts start",
    "build": "react-scripts build",
    "test": "CI=true react-scripts test",
    "eject": "react-scripts eject"
  },
```

* Don't force "--watch" into Jest - [LINK](https://github.com/facebook/create-react-app/issues/784)
* Running CRA Jest in non-interactive mode - [LINK](https://stackoverflow.com/questions/39724017/running-cra-jest-in-non-interactive-mode)
* OFFICIAL DOCUMENTATION - [LINK](https://jestjs.io/docs/en/cli#ci)