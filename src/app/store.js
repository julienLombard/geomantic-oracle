import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import geomanticThemeReducer from '../features/geomanticTheme/geomanticThemeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    geomanticTheme: geomanticThemeReducer,
  },
});
