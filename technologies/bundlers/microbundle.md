# MICROBUNDLE

* microbundle usa rollup y es zero config para typescript.

* usa `rollup-plugin-typescript2`

## JEST - FLEXMONO

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