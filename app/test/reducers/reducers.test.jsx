import expect from 'expect';
// Deep Freeze will recursively freeze all nested functions and objects. 
import df from 'deep-freeze-strict';
import { 
  searchTextReducer, 
  todosReducer,
  showCompletedReducer,
  authReducer } from 'reducers';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('Should set search text', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      const res = searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Something to do',
          completed: false,
          createdAt: 93746382
        }
      };

      const res = todosReducer(df(''), df(action));
      expect(res.length).toEqual(1); //new todo added
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      const todos = [{
        id: '123',
        text: 'something',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];

      const updates = {
        completed: false,
        completedAt: null
      };

      const action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      const res = todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed); //Check toggling completed
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);

    });

    it('should add existing todos', () => {
      const todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: null,
        createdAt: 33000
      }];

      const action = {
        type: 'ADD_TODOS',
        todos
      };
      const res = todosReducer(df([]),df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it('should wipe todos on logout', () => {
      const todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: null,
        createdAt: 33000
      }];

      const action = {
        type: 'LOGOUT',
      };
      const res = todosReducer(df(todos),df(action));

      expect(res.length).toEqual(0);
    });
  });


  describe('showCompletedReducer', () => {
    it('should toggle showCompleted to true ', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };

      const res = showCompletedReducer(df(false), action);
      expect(res).toEqual(true);
    });

    it('should toggle showCompleted to false ', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };

      const res = showCompletedReducer(df(true), df(action));
      expect(res).toEqual(false);
    });
  });

  describe('authReducer', () =>{
    it('should store uid on login', () => {
      const action = {
        type: 'LOGIN',
        uid: '123abc'
      };

      const res = authReducer(undefined, df(action));
      expect(res).toEqual({
        uid: action.uid
      });
    });

    it('should store uid on logout', () => {
      const authData = {
        uid: '123abc'
      };

      const action = {
        type: 'LOGOUT'
      };

      const res = authReducer(df(authData), df(action));
      expect(res).toEqual({});
    });
  });
});

