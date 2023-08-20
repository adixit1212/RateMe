import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface Auth {
  isLoggedIn: boolean;
}

const initialState: Auth = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authSelector = (state: RootState) => state.authReducer.isLoggedIn;
export default authSlice.reducer;
