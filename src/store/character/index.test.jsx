import { actions, reducer } from './index';

describe('character reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                loading: false,
                data: undefined,
                error: undefined,
            },
        );
    });

    it('should handle requestCharacter', () => {
        expect(
            reducer({}, actions.requestCharacter()),
        ).toEqual(
            {
                loading: true,
                data: undefined,
                error: undefined,
            },
        );
    });

    it('should handle requestCharacterSuccess', () => {
        expect(
            reducer({}, actions.requestCharacterSuccess({
                name: 'Character Name',
                status: 'Alive',
                species: 'Human',
                gender: 'Male',
                image: 'test.src',
                location: {},

            })),
        ).toEqual(
            {
                loading: false,
                data: {
                    name: 'Character Name',
                    status: 'Alive',
                    species: 'Human',
                    gender: 'Male',
                    image: 'test.src',
                    location: {},
                },
            },
        );
    });

    it('should handle requestCharacterError', () => {
        expect(
            reducer({}, actions.requestCharacterError('Error: something went wrong')),
        ).toEqual(
            {
                loading: false,
                data: undefined,
                error: 'Error: something went wrong',
            },
        );
    });
});
