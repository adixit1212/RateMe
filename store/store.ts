import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice';

export const store = configureStore({
  reducer: {
    userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
console.log('Initial state:', store.getState()); // Add this line
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
