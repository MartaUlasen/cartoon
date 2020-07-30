import {
    put, call, takeLeading,
} from 'redux-saga/effects';
import axios from 'axios';
import { actions } from 'store/characterList';

export function* fetchCharacterListWorker({ payload }) {
    try {
        const result = yield call(axios.get, payload);
        yield put(actions.requestCharacterListSuccess(result.data));
    }
    catch (e) {
        yield put(actions.requestCharacterListError(e.toString()));
    }
}

export function* fetchCharacterListWatcher() {
    yield takeLeading(actions.requestCharacterList.toString(), fetchCharacterListWorker);
}
