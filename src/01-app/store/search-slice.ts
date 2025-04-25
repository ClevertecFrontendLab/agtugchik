import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ApplicationState } from './configure-store';

export type SearchBarState = typeof initialState;

const initialState = {
    searchBarValue: '',
    isOpenFilterDrawer: false,
    meatFilter: [] as string[],
    sideDishFilter: [] as string[],
    alergenFilter: [] as string[],
    categoryFilter: [] as string[],
    excludeAllergens: false,
    isActiveFilters: false,
    startFilter: false,
};

const toggleValueInArray = <T>(array: T[], value: T): T[] =>
    array.includes(value) ? array.filter((item) => item !== value) : [...array, value];

const updateFilter = (
    state: SearchBarState,
    filterKey: keyof Pick<
        SearchBarState,
        'meatFilter' | 'sideDishFilter' | 'alergenFilter' | 'categoryFilter'
    >,
    value: string,
) => {
    state[filterKey] = toggleValueInArray(state[filterKey], value);

    const hasAnyActiveFilters =
        state.meatFilter.length > 0 ||
        state.sideDishFilter.length > 0 ||
        state.alergenFilter.length > 0 ||
        state.categoryFilter.length > 0;

    state.isActiveFilters = hasAnyActiveFilters;
};

export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,
    reducers: {
        setSearchBarValue: (state, { payload: value }: PayloadAction<string>) => {
            state.searchBarValue = value;
        },
        toggleIsOpenFilterDrawer: (state) => {
            state.isOpenFilterDrawer = !state.isOpenFilterDrawer;
        },
        setExcludeAllergens: (state, { payload: value }: PayloadAction<boolean>) => {
            if (!value) state.alergenFilter = [];
            state.excludeAllergens = value;
        },
        toggleAllergenValue: (state, { payload: value }: PayloadAction<string>) => {
            updateFilter(state, 'alergenFilter', value);
        },
        toggleMeatValue: (state, { payload: value }: PayloadAction<string>) => {
            updateFilter(state, 'meatFilter', value);
        },
        toggleSideDishValue: (state, { payload: value }: PayloadAction<string>) => {
            updateFilter(state, 'sideDishFilter', value);
        },
        toggleCategoryValue: (state, { payload: value }: PayloadAction<string>) => {
            updateFilter(state, 'categoryFilter', value);
        },
        resetFilters: (state) => {
            state.meatFilter = [];
            state.sideDishFilter = [];
            state.alergenFilter = [];
            state.categoryFilter = [];
            state.excludeAllergens = false;
            state.isActiveFilters = false;
        },
        toggleStartFilter: (state) => {
            state.isOpenFilterDrawer = false;
            state.startFilter = !state.startFilter;
        },
    },
});

export const isOpenFilterDrawerSelector = (state: ApplicationState) =>
    state.searchBar.isOpenFilterDrawer;
export const searchBarValueSelector = (state: ApplicationState) => state.searchBar.searchBarValue;
export const excludeAllergensSelector = (state: ApplicationState) =>
    state.searchBar.excludeAllergens;
export const searchSliceSelector = (state: ApplicationState) => state.searchBar;
export const {
    setSearchBarValue,
    toggleIsOpenFilterDrawer,
    setExcludeAllergens,
    toggleAllergenValue,
    toggleMeatValue,
    toggleSideDishValue,
    toggleCategoryValue,
    resetFilters,
    toggleStartFilter,
} = searchBarSlice.actions;
export default searchBarSlice.reducer;
