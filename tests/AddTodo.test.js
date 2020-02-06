import React from 'react';
import {shallow} from 'enzyme';
import AddTodo from '../src/components/AddTodo';

describe('Rendering', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddTodo />);
  });

  it('is TextInput visible?', () => {
    expect(wrapper.find('TextInput')).toHaveLength(1);
  });

  it('is Button Visible? ', () => {
    expect(wrapper.find('Button')).toHaveLength(1);
  });
});

describe('Interaction', () => {
  let wrapper;
  let props;
  const text = 'some Todo';

  beforeEach(() => {
    props = {
      onAdded: jest.fn(),
    };
    wrapper = shallow(<AddTodo onAdded={props.onAdded} />);
    wrapper.find('TextInput').simulate('changeText', text);
    wrapper.find('Button').prop('onPress')();
  });

  it('should call onAdded callback with input text', () => {
    expect(props.onAdded).toHaveBeenCalledTimes(1);
    expect(props.onAdded).toHaveBeenCalledWith(text);
  });
});
