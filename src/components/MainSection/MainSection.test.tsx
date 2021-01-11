import React from 'react'
import MainSection from './index'
import { render } from '@testing-library/react'

describe('MainSection component', () => {
  it('should render', () => {
    const wrapper = render(<MainSection />)
    expect(wrapper).toMatchSnapshot();
  })
  it('should output some text ', () => {
    const wrapper = 'WHERE YOUR PET BECOMES OUR BUDDY';
    expect(wrapper).toEqual('WHERE YOUR PET BECOMES OUR BUDDY')
  })
})