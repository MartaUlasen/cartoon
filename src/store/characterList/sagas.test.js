import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { actions } from './index';
import { fetchCharacterListWorker } from './sagas';

const result = {
    data: {
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
    },
};

describe('CharacterList saga fetches character list successfully', () => {
    const gen = fetchCharacterListWorker(actions.requestCharacterList('testurl'));

    it('Calls API', () => {
        expect(gen.next().value).toEqual(call(axios.get, 'testurl'));
    });

    it('Dispatches requestCharacterListSuccess action', () => {
        expect(gen.next(result).value).toEqual(put(
            actions.requestCharacterListSuccess(result.data),
        ));
    });

    it('Done', () => {
        expect(gen.next().done).toBe(true);
    });
});

describe('CharacterList saga fetches character list unsuccessfully', () => {
    const gen = fetchCharacterListWorker(actions.requestCharacterList('testurl'));

    it('Calls API', () => {
        expect(gen.next().value).toEqual(call(axios.get, 'testurl'));
    });

    it('Dispatches requestCharacterListError action', () => {
        expect(gen.throw(new Error('Something went wrong')).value).toEqual(
            put(actions.requestCharacterListError('Error: Something went wrong')),
        );
    });

    it('Done', () => {
        expect(gen.next().done).toBe(true);
    });
});
