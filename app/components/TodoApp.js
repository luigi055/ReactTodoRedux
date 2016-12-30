import React, { Component } from 'react';
import uuid from 'uuid';
import moment from 'moment';

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
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
          completed: false,
          createdAt: moment().unix(),
          completedAt: null
        }
      ]
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
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch} />
              <TodoList />
              <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoApp;
