import React, { Component } from 'react';
import uuid from 'uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoApi from 'TodoApi';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoApi.getTodos()
      // todos: [ used for testing
      //   {
      //     id: uuid(),
      //     text: 'Walk the dog',
      //     completed: false
      //   },
      //   {
      //     id: uuid(),
      //     text: 'clean the yard',
      //     completed: true
      //   },
      //   {
      //     id: uuid(),
      //     text: 'Study React',
      //     completed: true
      //   },
      //   {
      //     id: uuid(),
      //     text: 'fix something to eat',
      //     completed: false
      //   }
      // ]
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  componentDidUpdate() {
    TodoApi.setTodos(this.state.todos);
  }

  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos, //all todos stored so far
        {
          id: uuid(), //we're using node-uuid to warant an very unique id
          text,
          completed: false
        }
      ]
    });
  }

  handleToggle(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed; //will set to the opposite of the value
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  }

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  render() {
    const { todos, showCompleted, searchText } = this.state;
    const filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;
