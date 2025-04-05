import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from '../store/darkModeSlice'

export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer
    }
})