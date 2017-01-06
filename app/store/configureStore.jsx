import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { 
  searchTextReducer, 
  todosReducer,
  showCompletedReducer,
  authReducer } from 'reducers';

export const configure = (initialState = {}) => {
  const reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
    auth: authReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    initialState, 
    composeEnhancers(applyMiddleware(thunk))
  );
  
  return store;
};


