import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import * as actions from 'actions';
import { configure } from 'configureStore';
import TodoApp from 'TodoApp'; //specified the entire component folder as alias in webpack.config.js
import TodoApi from 'TodoApi';

// import '../playground/firebase';

const store = configure();

store.dispatch(actions.startAddTodo());

// App styles
import 'style!css!sass!./styles/styles.scss';

// the Provider children will be access to store
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
