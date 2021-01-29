import React from 'react'
import AboutUs from '../index';
import { render } from '@testing-library/react';

describe('AboutUs component', () => {
  it('should render', () => {
    const wrapper = render(<AboutUs content={[]} />)
    expect(wrapper).toMatchSnapshot();
  })
  it('should output some text', () => {
    const wrapper = 'Your pet, our buddy';
    expect(wrapper).toEqual('Your pet, our buddy')
  })
}) 