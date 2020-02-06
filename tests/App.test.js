/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {Text} from 'react-native';

describe('jest', () => {
  it('is working?', () => {
    const a = 1;
    expect(a + 1).toBe(2);
  });
});

describe('enzyme', () => {
  it('is it working?', () => {
    const text = 'some text';
    const wrapper = shallow(<Text>{text}</Text>);
    expect(wrapper.text()).toBe(text);
  });
});
