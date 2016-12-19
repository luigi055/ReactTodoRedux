import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import AddTodo from 'AddTodo';

describe('AddTodo', () => {
  it('should exists', () => {
    expect(AddTodo).toExist();
  });
  
  it('should call onAddTodo if the value is valid', () => {
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    const $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = 'Check my email';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('Check my email');
  });
  
  it('shouldn\'t call onAddTodo if the value is invalid', () => {
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    const $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});

