import React from 'react';
import { render } from '@testing-library/react';
import { Character } from './index';

describe('<Character />', () => {
    it('renders loading', () => {
        const requestCharacter = jest.fn();

        const { getByTestId } = render(
            <Character
                id='1'
                loading
                data={undefined}
                error={undefined}
                requestCharacter={requestCharacter}
            />,
        );

        expect(getByTestId('loader')).toBeInTheDocument();
    });

    it('renders error', () => {
        const requestCharacter = jest.fn();

        const { getByText } = render(
            <Character
                id='1'
                loading={false}
                data={undefined}
                error='Error'
                requestCharacter={requestCharacter}
            />,
        );

        expect(getByText('Error')).toBeInTheDocument();
    });

    it('Calls requestCharacter callback on mount with correct id', () => {
        const requestCharacter = jest.fn();

        render(
            <Character
                id='testid'
                loading={false}
                data={undefined}
                error={undefined}
                requestCharacter={requestCharacter}
            />,
        );

        expect(requestCharacter).toHaveBeenCalledTimes(1);
        expect(requestCharacter).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character/testid');
    });
});
