# BABEL

## GLOBAL

* npm install --global babel-cli

## COMPILAR

* Compilar fichero y sacarlo por terminal
  `babel mi-fichero.js`
* Compilar directamente a otro fichero
  `babel mi-fichero.js -o mi-fichero-compilado.js`
* Compilar todos los ficheros de un directorio
  `babel la-carpeta -d lib`

## LOCAL

* Install the babel-cli and babel-core modules:
  `npm install babel-cli babel-core --save-dev`
* Install the ECMAScript 2015 preset:
  `npm install babel-preset-es2015 --save-dev`

* babelrc

```bash
{
  "presets": ["es2015"]
}
```

* package.json

```bash
{
    "name": "mi-proyecto",
    "version": "1.0.0",
    "scripts": {
      "build": "babel directorio -d lib"
    },
    "babel":{
      "presets": ["es2015"]
    },
    "devDependencies": {
      "babel-cli": "^6.0.0"
    }
  }
```
