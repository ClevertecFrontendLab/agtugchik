import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Category } from '~/07-shared/types/api';

import { ApplicationState } from './configure-store';
export type AppState = typeof initialState;

function getInitialCategories(): Category[] {
    try {
        const raw = localStorage.getItem('appCategories');
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

const initialState = {
    isLoading: false,
    error: '' as string | null,
    categories: getInitialCategories(),
};
export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppError(state, { payload: error }: PayloadAction<string | null>) {
            state.error = error;
        },
        setAppLoader(state, { payload: isLoading }: PayloadAction<boolean>) {
            state.isLoading = isLoading;
        },
        setAppCategories(state, { payload: categories }: PayloadAction<Category[]>) {
            state.categories = categories;
            localStorage.setItem('appCategories', JSON.stringify(categories));
        },
    },
});
export const userLoadingSelector = (state: ApplicationState) => state.app.isLoading;
export const userErrorSelector = (state: ApplicationState) => state.app.error;
export const appCategoriesSelector = (state: ApplicationState) => state.app.categories;

export const { setAppError, setAppLoader, setAppCategories } = appSlice.actions;
export default appSlice.reducer;
