// reducers/darkModeSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: false, // Initial state of dark mode
  reducers: {
    toggleDarkMode: (state) => !state, // Toggle dark mode state
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
