# REST PROPERTIES - REST OPERATOR FOR OBJECTS

```bash
const { first, second, ...others } = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5
}
first // 1
second // 2
others // { third: 3, fourth: 4, fifth: 5 }
```

* Spread properties allow to create a new object by combining the properties of the object passed after the spread operator:

```bash
const items = { first, second, ...others }
items //{ first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }
```
