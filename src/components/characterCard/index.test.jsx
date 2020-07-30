import React from 'react';
import { render } from '@testing-library/react';
import CharacterCard from './index';

jest.mock('react-router-dom', () => ({
    Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

describe('<CharacterCard />', () => {
    it('renders character name', () => {
        const data = {
            name: 'Hero Name',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            image: 'testsrc',
            location: { name: 'some location' },
            url: 'characters/5',
        };
        const { getByText } = render(<CharacterCard data={data} />);
        expect(getByText(/hero name/i)).toBeInTheDocument();
    });

    it('renders character status with correct className', () => {
        const data = {
            name: 'Hero Name',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            image: 'testsrc',
            location: { name: 'some location' },
            url: 'characters/5',
        };
        const { getByText } = render(<CharacterCard data={data} />);
        expect(getByText(/alive/i)).toHaveClass('card__status--alive');
    });
});
