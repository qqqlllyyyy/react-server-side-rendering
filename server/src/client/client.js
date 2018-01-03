import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// The second parameter is the dom element to render to.
ReactDOM.hydrate(<Home />, document.querySelector('#root'));