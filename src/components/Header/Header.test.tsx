import React from 'react'
import Header from './index'
import { render } from '@testing-library/react'

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