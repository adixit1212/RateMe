import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export interface User {
  email: string;
  password: string;
}

const initialState: Array<User> = [
  {
    email: 'johndoe@email.com',
    password: 'Test@123',
  },
];

const loginUserSlice = createSlice({
  name: 'login_users',
  initialState,
  reducers: {
    addLoginUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
      // return [...state, action.payload];
    },
  },
});

export const { addLoginUser } = loginUserSlice.actions;
export const loginUserSelector = (state: RootState) => state.loginUserReducer;
export default loginUserSlice.reducer;