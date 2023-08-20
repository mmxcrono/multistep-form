import { RootState } from '@/app/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SignUpState {
  name: string;
  email: string;
  phone: string;
}

const initialState: SignUpState = {
  name: '',
  email: '',
  phone: '',
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    reset: (state) => {
      state.name = '';
      state.email = '';
      state.phone = '';
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
  },
});

export const { reset, setName, setEmail, setPhone } = signUpSlice.actions;
export const selectName = (state: RootState) => state.signUp.name;
export const selectEmail = (state: RootState) => state.signUp.email;
export const selectPhone = (state: RootState) => state.signUp.phone;

export default signUpSlice.reducer;
