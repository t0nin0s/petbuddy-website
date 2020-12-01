import React from 'react'
import Footer from '.'
import { StyledFooter } from 'styled-components'
import { render } from '@testing-library/react'

describe('Footer component', () => {
  it('should render', () => {
    const wrapper = render(<Footer />)
    expect(wrapper).toMatchSnapshot();
  })
  it('should have some text', () => {
    const wrapper = 'footer text'
    expect(wrapper).toEqual('footer text');
  })
})

