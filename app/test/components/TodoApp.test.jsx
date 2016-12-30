import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import { configure } from 'configureStore';
import TodoApp from 'TodoApp';
import TodoList from 'TodoList';


describe('TodoApp', () => {
  it('Should Exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render todoList', () => {
    const store = configure();
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
    const todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    const todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });
});
