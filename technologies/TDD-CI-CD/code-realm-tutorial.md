# CI/CD CODE REALM VIDEO TUTORIAL

- [LINK](https://www.youtube.com/watch?v=O4ZIJgOWj_A&index=3&list=PLcCp4mjO-z99IPNCrhEyrZimdUG5QXjPd)

- GITHUB - [LINK](https://github.com/alex996/react-css-spinners)

- EDITOR CONFIG - [LINK](https://editorconfig.org/)

- ESLINT - [LINK](https://eslint.org/)
  `npm install eslint --save-dev`
  `npx eslint --init`
  `npx eslint file`
  `npx eslint file --fix`

- PRETTIER - [LINK](https://prettier.io/)
  `npm i -D prettier-eslint`
  `$ npm i -D prettier-eslint-cli`
  `npx prettier-eslint 'src/**/*.js' --write`

- PACKAGE-JSON

```sh
  "scripts": {
    "lint": "eslint \"src/**/*.js\"",
    "lint:fix": "prettier-eslint \"src/**/*.js\" --write"
  }
```

- PRETTIER-ESLINT INTEGRATION WITH VSCODE - [LINK](https://github.com/prettier/prettier-eslint)

  - prettier-vscode - Visual Studio Code plugin (set prettier.eslintIntegration: true in settings)

- CREATE `vscode/settings.json` FILE

```sh
{
  "eslint.autoFixOnSave": false,
  "eslint.alwaysShowStatus": true,
  "prettier.eslintIntegration": true,
  // Set the default
  "editor.formatOnSave": true,
  // Enable per-language
  "[javascript]": {
    "editor.formatOnSave": true
  }
}
```

- Install and setup Husky and lint-staged

`npm i -D husky lint-staged`

and at package.json

```sh
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": [
      "npm run lint:fix",
      "git add"
    ]
  }
```

- Install and setup rollup

`npm i -D rollup-plugin-node-resolve`

at package.json - `rollup -c`

rollup.config.js

```sh
const dist = 'dist';
export default {
  input: 'src/index.js',
  output: [
    {
      file: `${dist}/bundle.cjs.js`,
      format: 'cjs'
    },
    {
      file: `${dist}/bundle.esm.js`,
      format: 'esm'
    },
    {
      name: 'ReactCssSpinners',
      file: `${dist}/bundle.umd.js`,
      format: 'umd'
    }
  ]
};
```

- Install rimraf to clean the dist directory before a new call of build

`npm i -D rimraf`

at package.json - `rimraf dist`

- Install eslint plugin react - `npm i -D eslint-plugin-react`

at eslintrc.json

```sh
{
  "extends": ["standard", "plugin:react/recommended"],
  "rules": {
    "semi": [2, "always"]
  }
}
```

- Install babel - `npm i -D rollup-plugin-babel @babel/core @babel/preset-env @babel/preset-react`

- Setting Babel

- Check browsers compatibility - `https://browserl.ist/?q=%3E+0.25%25%2C+ie+11%2C+not+op_mini+all%2C+not+dead`

```sh
{
  "presets": [
    [
      "@babel/env",
      {
        "modules": false, // doesn't compile modules using babel
        "browsers": "> 0.25%, ie 11, not op_mini all, not dead",
        "node": 8
      }
    ],
    "@babel/react"
  ]
}
```

- Set external & global in rollup.config.js

- Create .eslintignore & .prettierignore

  - add `dist and node_modules`

- Install uglify plugin - `npm i -D rollup-plugin-terser`

- Intall plugin to import css - `npm i -D rollup-plugin-string`
