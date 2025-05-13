import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Category } from '~/07-shared/types/api';

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
    isAuth: false,
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
    selectors: {
        userLoadingSelector: (state) => state.isLoading,
        userErrorSelector: (state) => state.error,
        appCategoriesSelector: (state) => state.categories,
        isAuthSelector: (state) => state.isAuth,
    },
});

export const { setAppError, setAppLoader, setAppCategories } = appSlice.actions;
export const { userLoadingSelector, userErrorSelector, appCategoriesSelector, isAuthSelector } =
    appSlice.selectors;
export default appSlice.reducer;
