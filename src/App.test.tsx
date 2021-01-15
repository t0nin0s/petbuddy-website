import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should render App', () => {
    const wrapper = render(<App />)
    expect(wrapper).toMatchSnapshot()
  })
});
