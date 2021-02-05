import React from 'react';
import Home from '../index';
import { render } from '@testing-library/react'

describe('Home screen', () => {
  it('should render', () => {
    const wrapper = render(<Home />)
    expect(wrapper).toMatchSnapshot();
  })
  it('should output some text', () => {
    const wrapper = 'Our Services';
    expect(wrapper).toEqual('Our Services')
  })
})