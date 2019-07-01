# ES MODULES - The ECMAScript standard for working with modules

* FLAVIO COPES - REACT HANDBOOK - [LINK](https://medium.freecodecamp.org/the-react-handbook-b71c27b0a795)

* The syntax to import a module is: `import package from 'module-name'`

* The syntax using CommonJS ( which is used in nodejs ) is: `const package = require('module-name')`

* A module is a JavaScript file that exports one or more values (objects, functions or variables), using the export keyword.

  * `export default str => str.toUpperCase()`

  * `import toUpperCase from './uppercase.js'`

* An HTML page can add a module by using a <script> tag with the special type="module" attribute: 

  * `<script type="module" src="index.js"></script>`

  * **This module import behaves like a defer** script load and any script loaded with type="module" is loaded in strict mode

* You can also use an absolute path for the module import, to reference modules defined on another domain:

  * `import toUpperCase from 'https://flavio-es-modules-example.glitch.me/uppercase.js'`

  * It’s either absolute, or has a ./ or / before the name

## DESTRUCTURING

```bash
const a = 1
const b = 2
const c = 3
export { a, b, c }
```

```bash
import * from 'module'
```

```bash
import { a } from 'module'
import { a, b } from 'module'
```

```bash
import { a, b as two } from 'module'
```

## What about browsers that do not support modules?

```bash
<script type="module" src="module.js"></script>
<script nomodule src="fallback.js"></script>
```

## EXPORT && EXPORT DEFAULT

* [LINK](https://stackoverflow.com/questions/21117160/what-is-export-default-in-javascript)

* MUY BUENO - [LINK](https://medium.com/javascript-in-plain-english/javascript-modules-for-beginners-56939088f7d9)
