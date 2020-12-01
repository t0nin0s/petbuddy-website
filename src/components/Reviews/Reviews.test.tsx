import React from 'react'
import Reviews from './index'
import { render } from '@testing-library/react'

describe('Reviews component', () => {
  it('should render', () => {
    const wrapper = render(<Reviews />)
    expect(wrapper).toMatchSnapshot();
  })
  it('should output reviewers names', () => {
    const wrapper = 'Maila, London';
    expect(wrapper).toEqual('Maila, London')
  })
})