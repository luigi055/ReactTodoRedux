import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, text } = this.props; //this was passed as a all the properties of a todo with the spread operator
    return (
      <div>
        {id}. {text}
      </div>
    );
  }
}

export default Todo;