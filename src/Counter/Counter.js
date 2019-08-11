import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionType from '../store/action';
class Counter extends Component {
  render() {
    return (
      <div className="container">
        <div className="card text-center" style={{ marginTop: "50px" }}>
          <div className="card-header">
            <h2>Counter : {this.props.counter}</h2>
          </div>
          <div className="card-body text-center">
            <button className="btn btn-dark" onClick={this.props.onIncrement}>
              Increment
            </button>
            <button className="btn btn-dark" onClick={this.props.onDecrement}>
              Decrement
            </button>
            <button
              className="btn btn-dark"
              onClick={() => this.props.onAdd(10)}
            >
              Add 10
            </button>
            <button
              className="btn btn-dark"
              onClick={() => this.props.onSubstract(5)}
            >
              Substract 5
            </button>
            <button className="btn btn-dark" onClick={this.props.storeResult}>
              Store Result
            </button>
          </div>
        </div>
        <hr />
        <h2>Stored Results : </h2>
        <ul className="list-group">
          {this.props.results.map(result => {
            return (
              <li key={result.id} className="list-group-item" 
                onClick={() => this.props.removeResult(result.id)}>
                {result.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    results: [...state.results]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => {
    //   dispatch({ type: actionType.INCREMENT });
    dispatch(actionType.asyncIncrement())
    },
    onDecrement: () => {
      dispatch({ type: "DECREMENT" });
    },
    onAdd: value => {
      dispatch({ type: "ADD", value: value });
    },
    onSubstract: value => {
      dispatch({ type: "SUBSTRACT", value: value });
    },
    storeResult: () => {
      dispatch({ type: "STORE_RESULT" });
    },
    removeResult: (id) => {
        dispatch({type : "REMOVE_RESULT", resultId : id})
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
