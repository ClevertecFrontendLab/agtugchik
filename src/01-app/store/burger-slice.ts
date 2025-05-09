import { createSlice } from '@reduxjs/toolkit';

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
    selectors: { burgerActiveSelector: (state) => state.isOpen },
});

export const { toggleBurger } = burgerMenuSlice.actions;
export const { burgerActiveSelector } = burgerMenuSlice.selectors;
export default burgerMenuSlice.reducer;
