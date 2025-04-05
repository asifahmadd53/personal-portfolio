// store/darkModeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    mode: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = !state.mode;
    },
    setDarkMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleDarkMode, setDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
