import expect from 'expect';
// Deep Freeze will recursively freeze all nested functions and objects. 
import df from 'deep-freeze-strict';
import { 
  searchTextReducer, 
  todosReducer,
  showCompletedReducer } from 'reducers';

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
        text: 'Walk the dog'
      };

      const res = todosReducer(df(''), df(action));
      expect(res.length).toEqual(1); //new todo added
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      const todos = [{
        id: '123',
        text: 'something',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];

      const action = {
        type: 'TOGGLE_TODO',
        id: '123'
      };

      const res = todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false); //Check toggling completed
      expect(res[0].completedAt).toEqual(undefined);

    });
  });


  describe('showCompletedReducer', () => {
    it('should toggle showCompleted to true ', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };

      const res = showCompletedReducer(df({ showCompleted: false }), action);
      expect(res).toEqual(true);
    });

    it('should toggle showCompleted to false ', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };

      const res = showCompletedReducer(df({ showCompleted: true }), df(action));
      expect(res).toEqual(false);
    });
  });
});
