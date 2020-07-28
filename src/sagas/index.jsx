import {
    all, put, call, takeLeading,
} from 'redux-saga/effects';
import { actions } from 'store/characterList';
import axios from 'axios';

export function* fetchCharacterListWorker({ payload }) {
    try {
        const result = yield call(() => axios.get(payload));
        yield put(actions.requestCharacterListSuccess(result.data));
    }
    catch (e) {
        yield put(actions.requestCharacterListError(e.toString()));
    }
}

export function* fetchCharacterListWatcher() {
    yield takeLeading(actions.requestCharacterList.toString(), fetchCharacterListWorker);
}

export default function* rootSaga() {
    yield all([
        fetchCharacterListWatcher(),
    ]);
}
