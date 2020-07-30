import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { actions } from './index';
import { fetchCharacterWorker } from './sagas';

const result = {
    data: {
        name: 'Test name',
    },
};

describe('Character saga fetches character successfully', () => {
    const gen = fetchCharacterWorker(actions.requestCharacter('testurl'));

    it('Calls API', () => {
        expect(gen.next().value).toEqual(call(axios.get, 'testurl'));
    });

    it('Dispatches requestCharacterSuccess action', () => {
        expect(gen.next(result).value).toEqual(put(actions.requestCharacterSuccess(result.data)));
    });

    it('Done', () => {
        expect(gen.next().done).toBe(true);
    });
});

describe('Character saga fetches character unsuccessfully', () => {
    const gen = fetchCharacterWorker(actions.requestCharacter('testurl'));

    it('Calls API', () => {
        expect(gen.next().value).toEqual(call(axios.get, 'testurl'));
    });

    it('Dispatches requestCharacterError action', () => {
        expect(gen.throw(new Error('Something went wrong')).value).toEqual(put(actions.requestCharacterError('Error: Something went wrong')));
    });

    it('Done', () => {
        expect(gen.next().done).toBe(true);
    });
});
