import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export interface User {
  name: string;
  email: string;
  password: string;
}

const initialState: Array<User> = [
  {
    name: 'John Doe',
    email: 'johndoe@email.com',
    password: 'Johnny',
  },
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
      // return [...state, action.payload];
    },
  },
});

export const { addUser } = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;
