import {
    put, call, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import { actions } from 'store/character';

export function* fetchCharacterWorker({ payload }) {
    try {
        const result = yield call(axios.get, payload);
        yield put(actions.requestCharacterSuccess(result.data));
    }
    catch (e) {
        yield put(actions.requestCharacterError(e.toString()));
    }
}

export function* fetchCharacterWatcher() {
    yield takeLatest(actions.requestCharacter.toString(), fetchCharacterWorker);
}
