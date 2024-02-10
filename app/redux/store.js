// store.js
import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './darkModeSlice'; // Import your dark mode reducer

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer, // Add dark mode reducer to the store
    // Add other reducers here if any
  },
});

export default store;