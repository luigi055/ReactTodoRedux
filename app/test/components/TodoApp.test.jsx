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
    // Expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    const todoData = {
      id: 11,
      text: 'test features',
      completed: false,
      createdAt: 0,
      completedAt: null
    };
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos: [todoData] });

    // Check that todos first item has completed value of false
    // the first item in the test is the unique todoData we created
    expect(todoApp.state.todos[0].completed).toBe(false); 
    // Call handleToggle with 11
    todoApp.handleToggle(11);
    // Verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(true);

    // Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');

    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);

  });
  it('should toggle todo from completed to incompleted', () => {
    const todoData = {
      id: 11,
      text: 'test features',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos: [todoData] });

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);

    // Test that when toggle from true to false, completedAt get remove
    // SOME WAYS TO MAKE THIS TEST
    expect(todoApp.state.todos[0].completedAt).toNotExist();
    // expect(todoApp.state.todos[0].completedAt).toBeA('undefined');
    // expect(typeof todoApp.state.todos[0].completedAt).toBe('undefined');
  });

});
