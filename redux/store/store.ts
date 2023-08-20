import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice';
// import authReducer from '../reducers/authSlice';

export const store = configureStore({
  reducer: {
    userReducer,
    // authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
console.log('Initial state:', store.getState()); // Add this line
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
