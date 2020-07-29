import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    characters: undefined,
    next: 'https://rickandmortyapi.com/api/character',
    error: undefined,
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
            state.characters = state.characters === undefined
                ? action.payload.results
                : [...state.characters, ...action.payload.results];
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
