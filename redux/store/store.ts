import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice';
import authReducer from '../reducers/authSlice';
import loginUserReducer from '../reducers/loginUserSlice';
import osReducer from '../reducers/platformSlice';

export const store = configureStore({
  reducer: {
    userReducer,
    authReducer,
    loginUserReducer,
    osReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});
console.log('Initial state:', store.getState()); // Add this line
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
