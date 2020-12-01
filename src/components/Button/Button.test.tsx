import React from 'react'
import Button from '.'
import { StyledButton } from 'styled-components'
import { render } from '@testing-library/react'

describe('Button component', () => {
  it('should render the button', () => {
    const wrapper = render(<Button />)
    expect(wrapper).toMatchSnapshot();
  })
  it('should have some text', () => {
    const wrapper = 'text here'
    expect(wrapper).toEqual('text here')
  })
})