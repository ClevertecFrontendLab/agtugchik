import { createSlice } from '@reduxjs/toolkit';

import { ApplicationState } from './configure-store';
export type BurgerMenuState = typeof initialState;

const initialState = {
    isOpen: false,
};

export const burgerMenuSlice = createSlice({
    name: 'burgerMenu',
    initialState,
    reducers: {
        toggleBurger: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const burgerActiveSelector = (state: ApplicationState) => state.burgerMenu.isOpen;
export const { toggleBurger } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;
