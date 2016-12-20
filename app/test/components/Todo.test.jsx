import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from 'Todo';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

describe('Todo', () => {
  it('Should Exist', () => {
    expect(Todo).toExist();
  });
  it('should call onToggle prop with id onClick', () => {
    const todoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    };
    const spy = expect.createSpy();
    const todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
    const $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalled(199);
  });
});