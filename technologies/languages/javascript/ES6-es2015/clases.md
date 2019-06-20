# ES6 CLASES

FLAVIO COPES - THE REACT HANDBOOK - [LINK](https://medium.freecodecamp.org/the-react-handbook-b71c27b0a795)

## INHERITANCE

```bash
class Person {
  constructor(name) {
    this.name = name
  }
  hello() {
    return 'Hello, I am ' + this.name + '.'
  }
}

class Programmer extends Person {
  hello() {
    return super.hello() + ' I am a programmer.'
  }
}

const flavio = new Programmer('Flavio')
flavio.hello() // PRINTS -> “Hello, I am Flavio. I am a programmer.”
```

## PRIVATE METHODS

Javascript does not have a built-in way to define private or protected methods.

## STATIC METHODS

```bash
class Person {
  static genericHello() {
    return 'Hello'
  }
}
Person.genericHello() //Hello
```

## Private methods - JavaScript does not have a built-in way to define private or protected methods

* There are workarounds

## Getters and setters

```bash
class Person {
  constructor(name) {
    this.name = name
  }
  set name(value) {
    this.name = value
  }
  get name() {
    return this.name
  }
}
```
