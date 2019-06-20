# ESLINT SETTINGS WITH TYPESCRIPT

* La mejor guía con typescript aparte de la de Ben Awad - Using ESLint and Prettier in a TypeScript Project - [LINK](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)

* Ben Awad - How to use Eslint with Typescript - [LINK](https://www.youtube.com/watch?v=mg_pDqszL3g)

1 - Install plugins ( no hace falta en proyectos creados con create-react-app )
`npm install --save-dev eslint-config-react-app babel-eslint@9.x eslint@5.x eslint-plugin-flowtype@2.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-react@7.x eslint-plugin-react-hooks@1.5.0`

2 - Agregar archivo de configuración - .eslintrc.js

```bash
module.export = {
  "extends": "react-app"
}
```

3 - Instalar extensión de VSC

```bash
  "prettier.eslintIntegration": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ],
```

4 - Si falla Eslint ir dentro de la terminal a la pestaña de output seleccionando el desplegable de la derecha la opción de Eslint ( filtro ) y corregir los errores que allí se muestren