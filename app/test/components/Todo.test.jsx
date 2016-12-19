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
});