import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';

import * as actions from 'actions';
import { configure } from 'configureStore';
import firebase from 'app/firebase/';
import router from 'app/router';
// everytime the state of the authentication changes
//when user logs in the app will redirect him to todos section
// and when there's not users logged in it will sent to root
firebase.auth().onAuthStateChanged(user => {
  if(user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

// import '../playground/firebase';

const store = configure();

// App styles
import 'style!css!sass!./styles/styles.scss';



// the Provider children will be access to store
ReactDOM.render(
  <Provider store={store}>  
    {router}
  </Provider>,
  document.getElementById('app')
);
