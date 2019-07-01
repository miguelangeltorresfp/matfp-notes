# ARROW FUNCTIONS - [LINK](https://medium.freecodecamp.org/the-react-handbook-b71c27b0a795)

## How this works in arrow functions

### METHOD IN AN OBJECT -> arrow functions are not suited as object methods

* In a regular function this refers to the object, so you can do:
* calling car.fullName() will return "Ford Fiesta".

```bash
const car = {
  model: 'Fiesta',
  manufacturer: 'Ford',
  fullName: function() {
    return `${this.manufacturer} ${this.model}`
  }
}
```

* The this scope with arrow functions is inherited from the execution context. An arrow function does not bind this at all, so its value will be looked up in the call stack
* car.fullName() will not work, and will return the string "undefined undefined":

```bash
const car = {
  model: 'Fiesta',
  manufacturer: 'Ford',
  fullName: () => {
    return `${this.manufacturer} ${this.model}`
  }
}
```

### CONSTRUCTORS

* Arrow functions cannot be used as constructors either, when instantiating an object will raise a TypeError

### HANDLING EVENTS

* This is also a problem when handling events. DOM Event listeners set this to be the target element, and if you rely on this in an event handler, a regular function is necessary:

```bash
const link = document.querySelector('#link')
link.addEventListener('click', () => {
  // this === window
})
const link = document.querySelector('#link')
link.addEventListener('click', function() {
  // this === link
})
```
