import { all } from 'redux-saga/effects';
import { fetchCharacterListWatcher } from './characterList/sagas';
import { fetchCharacterWatcher } from './character/sagas';

export default function* rootSaga() {
    yield all([
        fetchCharacterListWatcher(),
        fetchCharacterWatcher(),
    ]);
}
