# Accessing Nested Objects in JavaScript

* [LINK](https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f)

* Oliver Steele’s Nested Object Access Pattern
  `const name = ((user || {}).personalInfo || {}).name;`

```bash
const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}
// pass in your object structure as array elements
const name = getNestedObject(user, ['personalInfo', 'name']);
// to access nested array, just pass in array index as an element the path array.
const city = getNestedObject(user, ['personalInfo', 'addresses', 0, 'city']);
// this will return the city from the first address item.
```

## Otra forma

```sh
export const getPropValue = (obj, key) =>
  key.split('.').reduce((o, x) =>
    o == undefined ? o : o[x]
  , obj)
```

* Se usaría así :

```sh
const obj = {
  main: {
    content: {
      title: 'old pier',
      description: 'seagulls paradise'
    }
  }
}

const title = getPropValue(obj, 'main.content.title')
// 'old pier'
```

## Nested destructuring in ES6

```sh
const obj = {
  main: 'Brighton seagull'
}
const { main } = obj || {}
// 'Brighton seagull'
```

## Otra forma muy sencilla

```sh
const title = obj.main.content.title || 'default title'
```
