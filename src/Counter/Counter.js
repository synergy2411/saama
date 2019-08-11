import React, { Component } from "react";

class Counter extends Component {
    state = {
        counter : 0
    }
    onIncrement = () => {
        this.setState({
            counter : this.state.counter + 1
        })
    }
    onDecrement = () => {
        this.setState({
            counter : this.state.counter - 1
        })
    }
    onAdd = (value) => {
        this.setState({
            counter : this.state.counter + value
        })
    }
    onSubstract = (value) => {
        this.setState({
            counter : this.state.counter - value
        })
    }

  render() {
    return (
      <div className="card text-center">
        <div className="card-header">
          <h2>Counter : {this.state.counter}</h2>
        </div>
        <div className="card-body text-center">
            <button className="btn btn-dark" onClick={this.onIncrement}>Increment</button>
            <button className="btn btn-dark" onClick={this.onDecrement}>Decrement</button>
            <button className="btn btn-dark" onClick={() => this.onAdd(10)}>Add 10</button>
            <button className="btn btn-dark" onClick={() => this.onSubstract(5)}>Substract 5</button>
        </div>
      </div>
    );
  }
}

export default Counter;
