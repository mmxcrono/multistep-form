import { RootState } from '@/app/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}
interface SignUpState {
  personalInfo: PersonalInfo;
  currentStep: number;
}

const initialState: SignUpState = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
  },
  currentStep: 1,
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
      state.currentStep = 1;
    },
    submitPersonalInfo(state, action: PayloadAction<PersonalInfo>) {
      state.personalInfo = action.payload;
    },
    nextStep(state) {
      state.currentStep++;
    },
    previousStep(state) {
      state.currentStep--;
    },
  },
});

export const { reset, submitPersonalInfo, nextStep, previousStep } =
  signUpSlice.actions;
export const selectPersonalInfo = (state: RootState) =>
  state.signUp.personalInfo;
export const selectCurrentStep = (state: RootState) => state.signUp.currentStep;

export default signUpSlice.reducer;
