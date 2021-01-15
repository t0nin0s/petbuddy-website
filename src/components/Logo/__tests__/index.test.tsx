import React from 'react'
import { PetBuddyLogo } from '../index';
import { render } from '@testing-library/react';

describe('PetBuddy Logo', () => {
    it('should render in small sizes', () => {
        const wrapper = render(<PetBuddyLogo size='small' />)
        expect(wrapper).toMatchSnapshot();
    })

    it('should render in medium sizes', () => {
        const wrapper = render(<PetBuddyLogo size='medium' />)
        expect(wrapper).toMatchSnapshot();
    })

    it('should render in large sizes', () => {
        const wrapper = render(<PetBuddyLogo size='large' />)
        expect(wrapper).toMatchSnapshot();
    })
})