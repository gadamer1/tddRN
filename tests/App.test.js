import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('is text visible?', () => {});
  expect(wrapper.find('Text').contains('todo TDD')).toBe(true);
  it('is AddTodo visible?', () => {
    expect(wrapper.find('AddTodo')).toHaveLength(1);
  });

  it('is TodoList Visible? ', () => {
    expect(wrapper.find('TodoList')).toHaveLength(1);
  });
});
