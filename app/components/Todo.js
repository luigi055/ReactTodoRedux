import React, { Component } from 'react';
import moment from 'moment';

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //this was passed as a all the properties of a todo with the spread operator
    const { id, text, completed, createdAt, completedAt } = this.props; 
    const renderDate = () => {
      let message = 'Created at';
      let timestamp = createdAt;

      // If the todo is completed it send the date of completion
      if (completed) {
        message = 'Completed At';
        timestamp = completedAt;
      }

      return `${message} ${moment.unix(timestamp).format('MMM Do YYYY @ LT')}`;
    }
    //use defaultChecked since the checkbox will be mutable by an external function.
    // Using Checked="" will throw us an error when try to mutate
    return (
      <div onClick={() => this.props.onToggle(id)} >
        <input type="checkbox" defaultChecked={completed} /> 
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
}

export default Todo;
