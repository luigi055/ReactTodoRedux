import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoApp from 'TodoApp';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

describe('TodoApp', () => {
  it('Should Exist', () => {
    expect(TodoApp).toExist();
  });
  it('should add todo to the todos state on handleAddTodo', () => {
    const todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({ todos: [] }); //initially empty
    todoApp.handleAddTodo(todoText); //adding any value

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });
});