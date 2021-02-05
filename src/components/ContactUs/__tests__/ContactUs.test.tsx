import React from 'react'
import ContactUsContainer from '../index'
import { render } from '@testing-library/react'

describe('Contact Us component', () => {
  it('should render', () => {
    const wrapper = render(<ContactUsContainer />)
    expect(wrapper).toMatchSnapshot();
  })
})