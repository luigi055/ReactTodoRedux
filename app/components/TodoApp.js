import React, { Component } from 'react';
import TodoList from 'TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'clean the yard'
        },
        {
          id: 3,
          text: 'Study React'
        },
        {
          id: 4,
          text: 'fix something to eat'
        }
      ]
    }
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default TodoApp;