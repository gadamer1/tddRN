import React from 'react';
import TodoItem from '../src/components/TodoItem';
import {shallow} from 'enzyme';

describe('Rendering', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TodoItem />);
  });

  it('should render a text', () => {
    expect(wrapper.find('Text')).toHaveLength(1);
  });

  it('should render two Buttons', () => {
    expect(wrapper.find('Button')).toHaveLength(2);
  });
});
