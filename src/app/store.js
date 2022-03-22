import { configureStore } from '@reduxjs/toolkit';
import geomanticThemeReducer from '../features/geomanticTheme/geomanticThemeSlice';

export const store = configureStore({
  reducer: {
    geomanticTheme: geomanticThemeReducer,
  },
});
