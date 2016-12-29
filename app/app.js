import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
