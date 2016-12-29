import moment from 'moment';
import uuid from 'uuid';

export const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: null
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          const nextCompleted = !todo.completed;
          return {
            ...todo,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined
          };
        }
      });

    default:
      return state;
  }
};

export const showCompletedReducer = (state = { showCompleted: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state.showCompleted;
    default:
      return state; 
  }
};

