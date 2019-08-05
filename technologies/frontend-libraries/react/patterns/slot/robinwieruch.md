# REACT'S SLOT PATTERN

* It's used for passing multiple composed components to different places within a ( render prop ) component.
* Combining it with render prop pattern let passing the state from the render prop component to the composed components.

```bash
const App = () => (
  <Amount
    renderAmountOne={amount => (
      <div>
        <h2>My one Amount</h2>
        <Pound amount={amount} />
        <Euro amount={amount} />
      </div>
    )}
    renderAmountTwo={amount => (
      <div>
        <h2>My other Amount</h2>
        <Pound amount={amount} />
        <Euro amount={amount} />
      </div>
    )}
  />
);

class Amount extends Component {
  ...

  render() {
    return (
      <div>
        <span>US Dollar: {this.state.amount} </span>

        {this.props.renderAmountTwo(this.state.amount)}

        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>

        {this.props.renderAmountOne(this.state.amount)}
      </div>
    );
  }
}
```
