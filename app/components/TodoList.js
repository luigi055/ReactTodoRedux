import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from 'Todo';

export class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { todos } = this.props;
    const renderTodos = () => {
      if (todos.length === 0) {
        return <p className="container__message">Nothing To Do</p>;
      }
      return todos.map(todo => {
        return (
          <Todo key={todo.id} {...todo} />
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

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}
// Connect this component with the store
// Inject todos
export default connect(mapStateToProps)(TodoList);
