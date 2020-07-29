import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    data: undefined,
    error: undefined,
    next: 'https://rickandmortyapi.com/api/character',
};

const characterListModule = createSlice({
    name: 'charactersList',
    initialState,
    reducers: {
        requestCharacterList: (state) => {
            state.loading = true;
            state.error = undefined;
        },
        requestCharacterListSuccess: (state, action) => {
            state.loading = false;
            state.data = state.data === undefined
                ? action.payload.results
                : [...state.data, ...action.payload.results];
            state.next = action.payload.info.next;
        },
        requestCharacterListError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { actions, reducer } = characterListModule;

export default reducer;
