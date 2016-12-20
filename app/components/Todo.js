import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //this was passed as a all the properties of a todo with the spread operator
    const { id, text, completed } = this.props; 
    //use defaultChecked since the checkbox will be mutable by an external function.
    // Using Checked="" will throw us an error when try to mutate
    return (
      <div onClick={() => this.props.onToggle(id)} >
        <input type="checkbox" defaultChecked={completed} /> 
        {text}
      </div>
    );
  }
}

export default Todo;
