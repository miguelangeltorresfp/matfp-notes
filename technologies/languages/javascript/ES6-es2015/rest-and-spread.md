# SPREAD AND REST OPERATORS

## SPREAD OPERATOR

* ARRAYS

```bash
const a = [1, 2, 3]
const b = [...a, 4, 5, 6]
```

* OBJECTS

```bash
const newObj = { ...oldObj }
```

* STRINGS

```bash
const hey = 'hey'
const arrayized = [...hey] // ['h', 'e', 'y']
```

### SPREAD OPERATOR - USEFUL APPLICATIONS

* Use an array as function argument

```bash
const f = (foo, bar) => {}
const a = [1, 2]
f(...a)
```

```bash
const numbers = [1, 2, 3, 4, 5]
const sum = (a, b, c, d, e) => a + b + c + d + e
const sum = sum(...numbers)
```

## REST OPERATOR

### ARRAY DESTRUCTURING

```bash
const numbers = [1, 2, 3, 4, 5]
[first, second, ...others] = numbers
```

```bash
const person = {
  firstName: 'Tom',
  lastName: 'Cruise',
  actor: true,
  age: 54 //made up
}
const { firstName: name, age } = person //name: Tom, age: 54
```

```bash
const a = [1, 2, 3, 4, 5]
const [first, second] = a
const [first, second, , , fifth] = a
```

# videotutoriales
...spread operator and rest operator - Beau teaches JavaScript - [LINK](https://www.youtube.com/watch?v=iLx4ma8ZqvQ)
Aprendiendo JavaScript: Entendiendo el Spread Operator en Arrays - [LINK](https://www.youtube.com/watch?v=K77OCybbv24)