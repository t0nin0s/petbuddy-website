import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('count is 0');
    expect(linkElement).toBeInTheDocument();
  })
  it('should render App', () => {
    const wrapper = render(<App />)
    expect(wrapper).toMatchSnapshot()
  })
});
