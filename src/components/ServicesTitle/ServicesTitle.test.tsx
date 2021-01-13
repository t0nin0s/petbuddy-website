import React from 'react'
import ServicesTitle from './index'
import { render } from '@testing-library/react'

describe('Services Title component', () => {
  it('Should render', () => {
    const wrapper = render(<ServicesTitle />)
    expect(wrapper).toMatchSnapshot();
  })
  it('Should display the section title', () => {
    const wrapper = "Our services";
    expect(wrapper).toEqual('Our Services');
  })
})