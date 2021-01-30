import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('App component', () => {
  it('should render App', () => {
    const wrapper = shallow(<App />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
});
