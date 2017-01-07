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
    it('should filter todos by searchText if upper case', () => {
      const filterTodos = TodoApi.filterTodos(todos, true, 'Some');

      expect(filterTodos.length).toBe(2);
    });
    it('should return all todos if searchText is empty', () => {
      const filterTodos = TodoApi.filterTodos(todos, true, '');

      expect(filterTodos.length).toBe(3);
    });

  });
});
