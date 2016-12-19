import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
  it('Should Exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    const todos = [{
      id: 1,
      text: 'Do Something'
    }, {
      id: 2,
      text: 'Check Email'
    }];

    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo); //check how many Todo's TodoList generates

    expect(todosComponents.length).toBe(todos.length); //since there's just 2 todos todosComponents should render 2 Todo component
  });
});