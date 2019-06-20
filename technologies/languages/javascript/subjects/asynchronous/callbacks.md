# CALLBACKS

* Are great for simple cases !

```bash
window.addEventListener('load', () => {
  document.getElementById('button').addEventListener('click', () => {
    setTimeout(() => {
      items.forEach(item => {
        //your code here
      })
    }, 2000)
  })
})
```

## Handling errors in callbacks

* Using the same strategy that nodejs adopted : The first parameter in any callback function is the error object: error-first callbacks. If there is no error, the object is null. If there is an error, it contains some description of the error and other information.

```bash
fs.readFile('/file.json', (err, data) => {
  if (err !== null) {
    //handle error
    console.log(err)
    return
  }
  //no errors, process data
  console.log(data)
})
```
