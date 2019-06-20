# ASYNC/AWAIT

FLAVIO COPES - REACT HANDBOOK - [LINK](https://medium.freecodecamp.org/the-react-handbook-b71c27b0a795)

* Async functions are a combination of promises and generators, and basically, they are a higher level abstraction over promises. Let me repeat: async/await is built on promises.

* Reduce the "don't break the chain" limitation of chaining promises.

* In the example below the code is written as synchronous but it's asynchronous and non-blocking behind the scenes.

```bash
const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000)
  })
}
const doSomething = async () => {
  console.log(await doSomethingAsync())
}
console.log('Before')
doSomething()
console.log('After')
```

## Promise all the things

* Prepending the async keyword to any function means that the function will return a promise.
  Event if it's not doing so explicitly, it will internally make it return a promise.

```bash
const aFunction = async () => {
  return 'test'
}
aFunction().then(alert) // This will alert 'test'
```

The above code is the same as :

```bash
const aFunction = async () => {
  return Promise.resolve('test')
}
aFunction().then(alert) // This will alert 'test'
```

## CHAINING PROMISES => ASYNC/AWAIT

* Chaining Promises

```bash
const getFirstUserData = () => {
  return fetch('/users.json') // get users list
    .then(response => response.json()) // parse JSON
    .then(users => users[0]) // pick first user
    .then(user => fetch(`/users/${user.name}`)) // get user data
    .then(userResponse => response.json()) // parse JSON
}
getFirstUserData()
```

* Async/Await

```bash
const getFirstUserData = async () => {
  const response = await fetch('/users.json') // get users list
  const users = await response.json() // parse JSON
  const user = users[0] // pick first user
  const userResponse = await fetch(`/users/${user.name}`) // get user data
  const userData = await user.json() // parse JSON
  return userData
}
getFirstUserData()
```

## Multiple async functions in series

```bash
const promiseToDoSomething = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 10000)
  })
}
const watchOverSomeoneDoingSomething = async () => {
  const something = await promiseToDoSomething()
  return something + ' and I watched'
}
const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
  const something = await watchOverSomeoneDoingSomething()
  return something + ' and I watched as well'
}
watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
  console.log(res)
})
```

Will Print `I did something and I watched and I watched as well`

## Easier debugging

Debugging promises is hard because the debugger will not step over asynchronous code.

Async/await makes this very easy because to the compiler it’s just like synchronous code.
