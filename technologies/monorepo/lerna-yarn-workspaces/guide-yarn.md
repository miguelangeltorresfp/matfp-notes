# GUIDE - YARN WORKSPACES

* `yarn why react` - analiza el por qué y dónde está instalada esta dependencia

* `yarn workspaces info` - It will display the workspace dependency tree of your current project.

* Using --cwd tells yarn to use packages/website as it's current working directory
  `yarn --cwd packages/website`

* Install common dependencies in the root: jest, husky, storybook, eslint, prettier, etc: `yarn add husky --dev -W`

* Remove a package - `yarn @fashionbiz20/mundofashion-nextjs remove next-transpile-modules`
 [link](https://github.com/lerna/lerna/issues/1886)

* `yarn workspaces run test -ci` - Invoca el script test en todos los paquetes.
  It will also pass forward flags.
