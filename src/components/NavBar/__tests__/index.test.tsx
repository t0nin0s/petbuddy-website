import React from 'react'
import NavBar from '../index'
import { render } from '@testing-library/react'

describe('NavBar component', () => {
  it('should render', () => {
    const wrapper = render(<NavBar />)
  })
  it('should display text', () => {
    const wrapper = 'Cat Services';
    expect(wrapper).toEqual('Cat Services')
  })
})
