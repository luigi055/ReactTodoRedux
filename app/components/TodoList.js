import React, { Component } from 'react';
import Todo from 'Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { todos, onToggle } = this.props;
    const renderTodos = () => {
      return todos.map(todo => {
        return (
          <Todo key={todo.id} {...todo} onToggle={onToggle}  />
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}

export default TodoList;
