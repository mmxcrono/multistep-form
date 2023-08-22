import { RootState } from '@/app/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}
interface SignUpState {
  personalInfo: PersonalInfo;
  step: number;
}

const initialState: SignUpState = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
  },
  step: 1,
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    reset: (state) => {
      state.personalInfo = {
        name: '',
        email: '',
        phone: '',
      };
      state.step = 1;
    },
    submitPersonalInfo(state, action: PayloadAction<PersonalInfo>) {
      state.personalInfo = action.payload;
    },
    nextStep(state) {
      state.step++;
    },
    previousStep(state) {
      state.step--;
    },
  },
});

export const { reset, submitPersonalInfo, nextStep, previousStep } =
  signUpSlice.actions;
export const selectPersonalInfo = (state: RootState) =>
  state.signUp.personalInfo;
export const selectStep = (state: RootState) => state.signUp.step;

export default signUpSlice.reducer;
