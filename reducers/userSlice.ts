import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export interface User {
  name: string;
  email: string;
}

const initialState: Array<User> = [
  {
    name: 'John Doe',
    email: 'johndoe@email.com',
  },
];

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;

// import { createReducer } from '@reduxjs/toolkit';
// import { setPlatform } from '../actions/sectionActions';

// interface SectionState {
//   isAndroid: boolean;
//   isIOS: boolean;
// }

// const initialState: SectionState = {
//   isAndroid: false,
//   isIOS: false,
// };

// const sectionReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(setPlatform, (state, action) => {
//       state.isAndroid = action.payload === 'android';
//       state.isIOS = action.payload === 'ios';
//     });
// });

// export default sectionReducer;
