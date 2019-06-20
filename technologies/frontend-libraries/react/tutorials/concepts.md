# REACT BASIC CONCEPTS

## PURITY

* PURE FUNCTION - In javascript when a function does not mutate objects but just returns a news object, it's called a pure function

* Shoud not cause side effects and should return the same output when called multiple times with the same imput

* React applies this concept to components. A React component is a pure component when its output is only dependant on its props.

* All functional components are pure components:

```bash
const Button = props => {
  return <button>{props.message}</button>
}
```

* Class components can be pure if their output only depends on the props:

```bash
class Button extends React.Component {
  render() {
    return <button>{this.props.message}</button>
  }
}
```

## Pass methods as props

```bash
const Button = props => {
  return <button onClick={props.onClickHandler}>{props.text}</button>
}
const LoginButton = props => {
  return <Button text="Login" onClickHandler={props.onClickHandler} />
}
const Container = () => {
  const onClickHandler = () => {
    alert('clicked')
  }
  return <LoginButton onClickHandler={onClickHandler} />
}
```

## Using children

```bash
const Sidebar = props => {
  return <aside>{props.children}</aside>
}
```

```bash
<Sidebar>
  <Link title="First link" />
  <Link title="Second link" />
</Sidebar>
```

* Higher order components
  When a component receives a component as a prop and returns a component, it’s called higher order component.
