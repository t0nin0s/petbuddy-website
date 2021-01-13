import React from 'react'
import Services from './index'
import { render } from '@testing-library/react'

describe('Services component', () => {
  it('should render', () => {
    const wrapper = render(<Services />)
    expect(wrapper).toMatchSnapshot();
  })
  it('should output a title', () => {
    const wrapper = "Dog Services";
    expect(wrapper).toEqual('Dog Services')
  })
})