import React from 'react'
import NavBar from '../index'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('NavBar component', () => {
  it('should render', () => {
    const wrapper = shallow(<NavBar />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
