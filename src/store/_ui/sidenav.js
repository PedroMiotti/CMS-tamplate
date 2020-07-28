// Redux
import { createSlice, createSelector } from "@reduxjs/toolkit";


const slice = createSlice({
    name: "sidenav",
    initialState: {
        isOpen: true
    },
    reducers: {
        TOGGLE_SIDENAV: (sidenav, action) => {
            sidenav.isOpen = !sidenav.isOpen;
        },
    }
});

export const { TOGGLE_SIDENAV } = slice.actions;

export default slice.reducer;