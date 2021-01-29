import React from 'react';
import Contact from '../index';
import { render } from '@testing-library/react'

describe('Contact screen', () => {
  it('should render', () => {
    const wrapper = render(<Contact />)
    expect(wrapper).toMatchSnapshot();
  })
  it('should output init text', () => {
    const wrapper = 'Here will go Contact our company Screen';
    expect(wrapper).toEqual('Here will go Contact our company Screen')
  })
})