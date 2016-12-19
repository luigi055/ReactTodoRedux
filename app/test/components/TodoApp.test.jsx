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
});