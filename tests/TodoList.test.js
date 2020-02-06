import React from 'react';
import TodoList from '../src/components/TodoList';
import {shallow} from 'enzyme';

describe('Rendering', () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      items: [
        {
          text: 'some Todo',
          completed: false,
        },
      ],
    };

    wrapper = shallow(<TodoList items={props.items} />);
  });
  it('should render flat list', () => {
    expect(wrapper.find('FlatList')).toHaveLength(1);
  });

  it('should pass props to flatlist', () => {
    expect(wrapper.find('FlatList').prop('data')).toBe(props.items);
  });
});
