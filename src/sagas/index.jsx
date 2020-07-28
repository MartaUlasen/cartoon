import {
    all, put, call, takeEvery,
} from 'redux-saga/effects';
import { actions } from 'store/characterList';
import axios from 'axios';

export function* fetchCharacterListSaga({ payload }) {
    try {
        const result = yield call(() => axios.get(payload));
        yield put(actions.requestCharacterListSuccess(result.data));
    }
    catch (e) {
        yield put(actions.requestCharacterListError(e.toString()));
    }
}

export function* watchFetchCharacterList() {
    yield takeEvery(actions.requestCharacterList.toString(), fetchCharacterListSaga);
}

export default function* rootSaga() {
    yield all([
        watchFetchCharacterList(),
    ]);
}
