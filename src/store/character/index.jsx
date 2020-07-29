import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    data: undefined,
    error: undefined,
};

const characterModule = createSlice({
    name: 'charactersList',
    initialState,
    reducers: {
        requestCharacter: (state) => {
            state.loading = true;
            state.data = undefined;
            state.error = undefined;
        },
        requestCharacterSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        requestCharacterError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { actions, reducer } = characterModule;

export default reducer;
