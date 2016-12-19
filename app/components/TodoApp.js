import React, { Component } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCompleted: false,
      searchText: '',
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
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAddTodo(text) {
    alert(`new Todo: ${text}`);  
  }

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;