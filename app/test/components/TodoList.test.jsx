import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import { configure } from 'configureStore';
import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodo, { Todo } from 'Todo';

describe('TodoList', () => {
  it('Should Exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    const todos = [{
      id: 1,
      text: 'Do Something',
      completed: false,
      completedAt: null,
      createdAt: 500
    }, {
      id: 2,
      text: 'Check Email',
      completed: false,
      completedAt: null,
      createdAt: 500
    }];
    const store = configure({
      todos: todos
    });
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    );
    const todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo); //check how many Todo's TodoList generates

    expect(todosComponents.length).toBe(todos.length); //since there's just 2 todos todosComponents should render 2 Todo component
  });
  
  it('should render empty message if no todos', () => {
    const todos = [];

    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});