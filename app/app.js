import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import TodoApp from 'TodoApp'; //specified the entire component folder as alias in webpack.config.js

// App styles
import 'style!css!sass!./styles/styles.scss';

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
