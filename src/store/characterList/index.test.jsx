import { actions, reducer } from './index';

describe('characterList reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                loading: false,
                data: undefined,
                error: undefined,
                next: 'https://rickandmortyapi.com/api/character',
            },
        );
    });

    it('should handle requestCharacterList', () => {
        expect(
            reducer({}, actions.requestCharacterList()),
        ).toEqual(
            {
                loading: true,
            },
        );
    });

    it('should handle requestCharacterListSuccess', () => {
        expect(
            reducer({}, actions.requestCharacterListSuccess({
                results: [{
                    name: 'Character Name',
                    status: 'Alive',
                    species: 'Human',
                    gender: 'Male',
                    image: 'test.src',
                    location: {},

                }],
                info: {
                    next: 'https://rickandmortyapi.com/api/character/1',
                },
            })),
        ).toEqual(
            {
                loading: false,
                data: [
                    {
                        name: 'Character Name',
                        status: 'Alive',
                        species: 'Human',
                        gender: 'Male',
                        image: 'test.src',
                        location: {},
                    },
                ],
                next: 'https://rickandmortyapi.com/api/character/1',
            },
        );
    });

    it('should handle requestCharacterListError', () => {
        expect(
            reducer({}, actions.requestCharacterListError('Error: something went wrong')),
        ).toEqual(
            {
                loading: false,
                data: undefined,
                error: 'Error: something went wrong',
                next: undefined,
            },
        );
    });
});
