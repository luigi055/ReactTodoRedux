import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from 'Todo';
import TodoApi from 'TodoApi'

export class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { todos, showCompleted, searchText } = this.props;
    const renderTodos = () => {
      const filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
      if (filteredTodos.length === 0) {
        return <p className="container__message">Nothing To Do</p>;
      }
      return filteredTodos.map(todo => {
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
  return state
}
// Connect this component with the store
// Inject todos
export default connect(mapStateToProps)(TodoList);
