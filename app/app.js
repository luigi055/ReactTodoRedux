import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import TodoApp from 'TodoApp'; //specified the entire component folder as alias in webpack.config.js
import * as actions from 'actions';
// const store = require('configureStore').configure();
import { configure } from 'configureStore';
const store = configure();

store.subscribe(() => {
  console.log('New State:', store.getState);
});

store.dispatch(actions.addTodo('Clean the Yard'));
store.dispatch(actions.setSearchText('Yard'));
store.dispatch(actions.toggleShowCompleted());

// App styles
import 'style!css!sass!./styles/styles.scss';

// the Provider children will be access to store
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
