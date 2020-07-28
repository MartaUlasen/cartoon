import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas';
import characterList from './characterList';

const rootReducer = combineReducers({
    characterList,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware(), sagaMiddleware];

const store = configureStore({
    reducer: rootReducer,
    middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
