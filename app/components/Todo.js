import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { toggleTodo } from 'actions';

export class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //this was passed as a all the properties of a todo with the spread operator
    const { id, text, completed, createdAt, completedAt, dispatch } = this.props; 
    const todoClassName = completed ? 'todo todo-completed' : 'todo';
    const renderDate = () => {
      let message = 'Created at';
      let timestamp = createdAt;

      // If the todo is completed it send the date of completion
      if (completed) {
        message = 'Completed At';
        timestamp = completedAt;
      }

      return `${message} ${moment.unix(timestamp).format('MMM Do YYYY @ LT')}`;
    };
    //use defaultChecked since the checkbox will be mutable by an external function.
    // Using Checked="" will throw us an error when try to mutate
    return (
      <div className={todoClassName} onClick={() => dispatch(toggleTodo(id))} >
        <div>
          <input type="checkbox" defaultChecked={completed} /> 
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
}

// Inject just dispatch and don't listen to store
export default connect()(Todo);
