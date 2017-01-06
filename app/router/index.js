import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router'
import TodoApp from 'TodoApp'; //specified the entire component folder as alias in webpack.config.js
import Login from 'Login';
import firebase from 'app/firebase/';

//react-router middleware for private routes
// this is that when anyone want to visit TodoApp it need to be logged in
const requireLogin = (nextState, replace, next) => {
  //if there's nobody logged in it will send to login
  if (!firebase.auth().currentUser) replace('/');
  next();
};

const redirectIfLoggedIn = (nextState, replace, next) => {
  // if someone is logged in and wanted to go to / path it will be
  // redirect to /todos
  if (firebase.auth().currentUser) replace('/todos');
  next();
};

export default (
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={Login} onEnter={redirectIfLoggedIn} />
        <Route path="todos" component={TodoApp} onEnter={requireLogin} />
      </Route>
    </Router>
);