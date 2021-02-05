import React from 'react'
import Header from '../index'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Header component', () => {
  it('should render', () => {
    const wrapper = shallow(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
  
})

