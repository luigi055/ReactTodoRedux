import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Todo } from 'Todo';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import * as actions from 'actions';

describe('Todo', () => {
  it('Should Exist', () => {
    expect(Todo).toExist();
  });
  it('should dispatch TOGGLE_TODO action on click', () => {
    const todoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    };
    const action = actions.startToggleTodo(todoData.id, !todoData.completed);

    const spy = expect.createSpy();
    const todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);
    const $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });
});