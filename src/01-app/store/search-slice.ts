import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ApplicationState } from './configure-store';
export type SearchBarState = typeof initialState;

const initialState = {
    searchBarValue: '',
};

export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,
    reducers: {
        setSearchBarValue: (state, { payload: value }: PayloadAction<string>) => {
            state.searchBarValue = value;
        },
    },
});

export const searchBarValueSelector = (state: ApplicationState) => state.searchBar.searchBarValue;
export const { setSearchBarValue } = searchBarSlice.actions;
export default searchBarSlice.reducer;
