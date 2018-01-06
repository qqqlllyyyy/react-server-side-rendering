import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'; // Ties the store with our react app
import Routes from './Routes';
import reducers from './reducers';

// Create a redux store
// @param: reducers, initial state, middlewares
const store = createStore(reducers, {}, applyMiddleware(thunk));

// The second parameter is the dom element to render to.
// Anytime the store got changes, the 'Provider' will notice that and update related components.
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);