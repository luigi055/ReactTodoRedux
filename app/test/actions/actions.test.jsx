import expect from 'expect';
import { setSearchText, addTodo, toggleTodo, toggleShowCompleted } from 'actions';

describe('actions', () => {
  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    const res = setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'A new todo'
    };

    const res = addTodo(action.text);
    expect(res).toEqual(action);
  });
  it('should generate Toggle todo action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: '123'
    };

    const res = toggleTodo(action.id);
    expect(res).toEqual(action);
  });
  it('should generate Toggle show Completed action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };

    const res = toggleShowCompleted();
    expect(res).toEqual(action);
  });
});
