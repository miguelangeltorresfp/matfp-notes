# CREATE A COMPONENTS LIBRARY - RESUME

## OPCIONES

### BABEL7 or TypeScript

* [Babel7 or TypeScript](https://kulshekhar.github.io/ts-jest/user/babel7-or-ts)

### MICROBUNDLE ( basado en rollup )

* FLEXMONO => usa microbundle.
  * microbundle usa rollup y es zero config para typescript.

* JEST

  * No está muy claro aun como se configura jest: hay una pull request => [link](https://github.com/developit/microbundle/pull/555)

  * Pero en flexmono se configura usando babel.
  * para jest usa `babel-jest` para procesar los todos los archivos `ts|js|tsx|jsx` y `ts-jest` para procesar los archivos `ts|tsx`.
  * Luego el plugin `@storybook/addon-docs/jest-transform-mdx`
* Configuración de `ts-jest`:
    [link](https://kulshekhar.github.io/ts-jest/user/config/)
    [link](https://kulshekhar.github.io/ts-jest/user/config/babelConfig)
* Configuración de jest con babel:
    [link](https://jestjs.io/docs/en/getting-started#using-babel)
* Posible configuración de babel-jest:
    [link](https://www.npmjs.com/package/babel-jest)

### ROLLUP

* react-css-spinners by CODE-REALM => usa typescript solo para chequear tipos, para compilar lo hace con babel usando el plugin: `@babel/preset-typescript` => con el preset: `@babel/typescript`
* para jest se usa el plugin: `@babel/preset-env`

```bash
  [
    "@babel/env",
    {
      "targets": "node 10",
      "modules": false // false si es para preservar ES modules ( esm )
    }
  ,
```

* [Creating a React Component Library using Rollup, Typescript, Sass and Storybook](https://blog.harveydelaney.com/creating-your-own-react-component-library/)
  Github - [HarveyD/react-component-library
](https://github.com/HarveyD/react-component-library)

### TYPESCRIT y BABEL

* [movie-app](https://github.com/debojitroy/movie-app/blob/master/packages/components/package.json)
  La idea es usar typescript solo para type checking y para crear los tipos y babel para compilar el código

### SOLO TYPESCRIPT

### USANDO TSDX

### USANDO CREATE-REACT-LIBRARY
