import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import "./index.css";
import App from "./App";
import rootReducer from "./store/reducer";

// import * as serviceWorker from './serviceWorker';

// const logger = store => next => action => {};

const logger = store => {
  return next => {
    return action => {
      console.log("[MIDDLEWARE]", action);
    //   Some Async Code
    console.log("[STATE]",store.getState());
    localStorage.setItem("state", JSON.stringify(store.getState()))
      next(action);
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



// https://www.surveymonkey.com/r/2LXG7BN