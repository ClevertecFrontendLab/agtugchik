import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Recipe } from '~/07-shared/types/api';

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
    activeRecipes: [] as Recipe[],
    searchLoading: false,
    isActiveFilters: false,
    isActiveSearch: false,
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

    const hasActiveAlergensOrSearchValue =
        state.alergenFilter.length > 0 || state.searchBarValue.length > 2;

    state.isActiveFilters = hasAnyActiveFilters;
    state.isActiveSearch = hasActiveAlergensOrSearchValue;
};

export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,
    reducers: {
        setSearchBarValue: (state, { payload: value }: PayloadAction<string>) => {
            state.searchBarValue = value;
            state.isActiveSearch =
                state.alergenFilter.length > 0 || state.searchBarValue.length > 2;
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
        toggleOpenFilterDrawer: (state) => {
            state.isOpenFilterDrawer = false;
        },
        setActiveRecipes: (state, { payload: value }: PayloadAction<Recipe[]>) => {
            state.activeRecipes = value;
        },
        setSearchLoading: (state, { payload: value }: PayloadAction<boolean>) => {
            state.searchLoading = value;
        },
        resetFilters: (state) => {
            state.meatFilter = [];
            state.sideDishFilter = [];
            state.alergenFilter = [];
            state.categoryFilter = [];
            state.excludeAllergens = false;
            state.isActiveFilters = false;
        },
    },
    selectors: {
        isOpenFilterDrawerSelector: (state) => state.isOpenFilterDrawer,
        searchBarValueSelector: (state) => state.searchBarValue,
        excludeAllergensSelector: (state) => state.excludeAllergens,
    },
});

export const searchSliceSelector = (state: ApplicationState) => state.searchBar;

export const {
    setSearchBarValue,
    toggleIsOpenFilterDrawer,
    setExcludeAllergens,
    toggleAllergenValue,
    toggleMeatValue,
    toggleSideDishValue,
    toggleCategoryValue,
    toggleOpenFilterDrawer,
    setActiveRecipes,
    setSearchLoading,
    resetFilters,
} = searchBarSlice.actions;
export const { isOpenFilterDrawerSelector, searchBarValueSelector, excludeAllergensSelector } =
    searchBarSlice.selectors;
export default searchBarSlice.reducer;
