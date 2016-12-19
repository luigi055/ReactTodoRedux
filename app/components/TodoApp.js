import React, { Component } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

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
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(text) {
    alert(`new Todo: ${text}`);  
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;