import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { Platform } from 'react-native';

interface OS {
  os: string;
}

const initialState: OS = {
  os: Platform.OS,
};

const osSlice = createSlice({
  name: 'OS',
  initialState,
  reducers: {},
});

export const osSelector = (state: RootState) => state.osReducer.os;
export default osSlice.reducer;
