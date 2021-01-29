import React from 'react';
import Join from '../index';
import { render } from '@testing-library/react'

describe('Join screen', () => {
  it('should render', () => {
    const wrapper = render(<Join />)
    expect(wrapper).toMatchSnapshot();
  })
  it('should output init text', () => {
    const wrapper = 'Here will go JOIN our company Screen';
    expect(wrapper).toEqual('Here will go JOIN our company Screen')
  })
})