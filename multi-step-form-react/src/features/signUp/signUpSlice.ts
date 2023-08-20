import { RootState } from '@/app/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SignUpState {
  name: string;
  email: string;
  phone: string;
  step: number;
}

const initialState: SignUpState = {
  name: '',
  email: '',
  phone: '',
  step: 1,
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    reset: (state) => {
      state.name = '';
      state.email = '';
      state.phone = '';
      state.step = 1;
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
    nextStep(state) {
      state.step++;
    },
    previousStep(state) {
      state.step--;
    },
  },
});

export const { reset, setName, setEmail, setPhone, nextStep, previousStep } =
  signUpSlice.actions;
export const selectName = (state: RootState) => state.signUp.name;
export const selectEmail = (state: RootState) => state.signUp.email;
export const selectPhone = (state: RootState) => state.signUp.phone;
export const selectStep = (state: RootState) => state.signUp.step;

export default signUpSlice.reducer;
