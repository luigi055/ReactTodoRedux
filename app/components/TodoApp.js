import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import { startLogout } from 'actions';

export class TodoApp extends Component {
  constructor(props) {
    super(props);
    
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(e) {
    const { dispatch } = this.props;
    e.preventDefault();
    
    dispatch(startLogout());
  }
  
  render() {

    return (
      <div>   
        <div className="page-actions">
          <a href="#" onClick={this.onLogout} >Logout</a>
        </div>

        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(TodoApp);
