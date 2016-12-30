import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import * as actions from 'actions';
import { configure } from 'configureStore';
import TodoApp from 'TodoApp'; //specified the entire component folder as alias in webpack.config.js
import TodoApi from 'TodoApi';

const store = configure();

store.subscribe(() => {
  const state = store.getState();
  console.log('New State:', state);
  TodoApi.setTodos(state.todos);
});

const initialTodos = TodoApi.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Default todo
// store.dispatch(actions.addTodo('Clean the Yard'));
// store.dispatch(actions.setSearchText('Yard'));
// store.dispatch(actions.toggleShowCompleted());

// App styles
import 'style!css!sass!./styles/styles.scss';

// the Provider children will be access to store
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
