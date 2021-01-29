import React from 'react';
import { render } from '@testing-library/react';
import Services from '../index'

describe('Services component', () => {
  it('should render', () => {
    const wrapper = render(<Services />)
    expect(wrapper).toMatchSnapshot();
  })
  it('should output services title', () => {
    const wrapper = 'Dog Services'
    expect(wrapper).toEqual('Dog Services');
  })
})
