import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { 
  searchTextReducer, 
  todosReducer,
  showCompletedReducer } from 'reducers';

export const configure = (initialState = {}) => {
  const reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  const store = createStore(reducer,
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));
  
  return store;
};


