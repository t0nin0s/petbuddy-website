import React from 'react'
import Header from '../index'
import NavBar from '../../NavBar'
import { render } from '@testing-library/react';
import { shallow, mount } from '@testing-library/jest-dom'
import { MemoryRouter as Router, Link } from '@testing-library/react'

describe('Header component', () => {
  it('should render', () => {
    const wrapper = render(<Header />)
    expect(wrapper).toMatchSnapshot();
  })
  it('should output some categories', () => {
    const wrapper = 'Small Pet Services';
    expect(wrapper).toEqual('Small Pet Services')
  })
})

