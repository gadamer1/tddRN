import React from 'react';
import TodoItem from '../src/components/TodoItem';
import {shallow} from 'enzyme';
import {styles} from '../src/components/TodoItem';

describe('Rendering', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      item: {
        text: 'some Todo',
        completed: false,
      },
    };
    wrapper = shallow(<TodoItem {...props} />);
  });

  it('should render a text', () => {
    expect(wrapper.find('Text')).toHaveLength(1);
  });

  it('should render two Buttons', () => {
    expect(wrapper.find('Button')).toHaveLength(2);
  });

  describe('Uncompleted', () => {
    it('should have default style', () => {
      expect(wrapper.prop('style')).toBe(styles.default);
    });
  });

  describe('Completed', () => {
    beforeEach(() => {
      props.item.completed = true;

      wrapper = shallow(<TodoItem {...props} />);
    });

    it('should have completed style', () => {
      expect(wrapper.prop('style')).toBe(styles.completed);
    });
  });
});

describe('Interaction', () => {
  let wrapper;
  let props;

  describe('complete Feature', () => {
    beforeEach(() => {
      props = {
        onCompleted: jest.fn(),
        item: {
          text: 'some Todo',
          completed: false,
        },
        index: 0,
      };
      wrapper = shallow(<TodoItem {...props} />);
      wrapper
        .find('Button')
        .at(0)
        .prop('onPress')();
    });
    it('should call onCompleted with item index', () => {
      expect(props.onCompleted).toHaveBeenCalledTimes(1);
      expect(props.onCompleted).toHaveBeenCalledWith(props.index);
    });
  });

  describe('Delete Feature', () => {
    beforeEach(() => {
      props = {
        onDeleted: jest.fn(),
        item: {
          text: 'some Todo',
          completed: true,
        },
        index: 0,
      };
      wrapper = shallow(<TodoItem {...props} />);
      wrapper
        .find('Button')
        .at(1)
        .prop('onPress')();
    });

    it('should call onDeleted with item index', () => {
      expect(props.onDeleted).toHaveBeenCalledTimes(1);
      expect(props.onDeleted).toHaveBeenCalledWith(props.index);
    });
  });
});
