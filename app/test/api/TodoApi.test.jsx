import expect from 'expect';

import TodoApi from 'TodoApi';

describe('TodoApi', () => {
  // Mocha Method beforeEach()
  beforeEach(() => {
    //before each test the todos items saved in localStorage will be remove
    // since all data saved in localStorage also will be able for others tests
    localStorage.removeItem('todos');
  });
  it('should exist', () => {
    expect(TodoApi).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      const todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];
      TodoApi.setTodos(todos);
      
      const actualTodos = JSON.parse(localStorage.getItem('todos')); //store the valid store to localStorage, and transform the todos value to array again
      expect(actualTodos).toEqual(todos);
    });
    it('shouldn\'t set invalid todos array', () => {
      const badTodo = { a: 'b' };
      TodoApi.setTodos(badTodo);

      expect(localStorage.getItem(badTodo)).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('it should return empty array for bar localStorage data', () => {
      const actualTodos = TodoApi.getTodos();
      expect(actualTodos).toEqual([]);
    });
    it('should return todos if valid array in localStorage', () => {
      const todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));

      const actualTodos = TodoApi.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodo', () => {
    const todos = [{
      id: 1,
      text: 'Some text here',
      completed: true
    }, {
      id: 2,
      text: 'Other text here',
      completed: false
    }, {
      id: 3,
      text: 'Some text here',
      completed: true
    }]
    it('should return all items if showCompleted is true', () => {
      const filterTodos = TodoApi.filterTodos(todos, true, '');

      expect(filterTodos.length).toBe(3);
    });
    it('should return just false items if showCompleted is false', () => {
      const filterTodos = TodoApi.filterTodos(todos, false, '');

      expect(filterTodos.length).toBe(1);
    });
    it('should sort by completed status', () => {
      const filterTodos = TodoApi.filterTodos(todos, true, '');

      expect(filterTodos[0].completed).toBe(false);
    });
    it('should filter todos by searchText', () => {
      const filterTodos = TodoApi.filterTodos(todos, true, 'some');

      expect(filterTodos.length).toBe(2);
    });
    it('should return all todos if searchText is empty', () => {
      const filterTodos = TodoApi.filterTodos(todos, true, '');

      expect(filterTodos.length).toBe(3);
    });

  });
});
