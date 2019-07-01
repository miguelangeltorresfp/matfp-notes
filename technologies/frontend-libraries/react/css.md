# CSS IN REACT APPS

## CSS Modules

* A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.
* <https://www.gatsbyjs.org/tutorial/part-two/>

## className

* Importante - Solo se puede aplicar "className" a objetos de React, no se puede aplicar a componentes !!!

## Inline Styles with the style property

* Importante - los nombres de los objetos tienen que ir con camelcase
* Se puede poner o bien `fontSize: 200` o bien `font-size: "200px"`
* Con esta forma de aplicar estilos se pueden crear estilos que dependan dinámicamente de código javascript

```bash
import React from "react"
import ReactDOM from "react-dom"

function App() {

  return (
    <h1 style={{color: "#FF8C00", backgroundColor: "#FF2D00"}}>Good {timeOfDay}!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
```

```bash
import React from "react"
import ReactDOM from "react-dom"

function App() {

  const styles = {
    color: "#FF8C00", 
    backgroundColor: "#FF2D00"
  }
  
  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )

}

ReactDOM.render(<App />, document.getElementById("root"))
```
