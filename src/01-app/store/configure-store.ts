import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '~/01-app/query/create-api';

import appReducer, { appSlice } from './app-slice';
import burgerMunuReducer, { burgerMenuSlice } from './burger-slice';
import { searchBarSlice } from './search-slice';

const isProduction = false;
const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
    [burgerMenuSlice.name]: burgerMunuReducer,
    [searchBarSlice.name]: searchBarSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: !isProduction,
});
