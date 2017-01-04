import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import { AddTodo } from 'AddTodo';
import * as actions from 'actions';

describe('AddTodo', () => {
  it('should exists', () => {
    expect(AddTodo).toExist();
  });
  
  it('should dispatch ADD_TODO when valid todo text', () => {
    const todoText = 'Check my Email';
    const action = actions.startAddTodo(todoText);
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    const $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
  
  it('shouldn\'t dispatch ADD_TODO when invalid todo text', () => {
    const todoText = '';
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    const $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});

