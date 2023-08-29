import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';
import { Steps } from '@/enums/Steps';
import { Validation } from '@/enums/FormError';

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  nameError: string;
  emailError: string;
  phoneError: string;
}
interface SignUpState {
  personalInfo: PersonalInfo;
  currentStep: number;
}

export const initialState: SignUpState = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    nameError: '',
    emailError: '',
    phoneError: '',
  },
  currentStep: 1,
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    reset: (state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = initialState;
    },
    submitPersonalInfo(state, action: PayloadAction<Partial<PersonalInfo>>) {
      state.personalInfo = {
        ...state.personalInfo,
        ...action.payload,
      };
    },
    nextStep(state) {
      let isValid = true;

      // check if we can move to the next step
      if (state.currentStep === Steps.PersonalInfo) {
        const { name, email, phone } = state.personalInfo;

        if (!name) {
          state.personalInfo.nameError = Validation.FieldRequired;
          isValid = false;
        } else {
          state.personalInfo.nameError = '';
        }

        if (!email) {
          state.personalInfo.emailError = Validation.FieldRequired;
          isValid = false;
        }

        if (!phone) {
          state.personalInfo.phoneError = Validation.FieldRequired;
          isValid = false;
        } else if (!/^\+1 \d{3} \d{3} \d{4}/.test(phone)) {
          isValid = false;
          state.personalInfo.phoneError = Validation.InvalidPhone;
        }
      }

      if (isValid) {
        state.currentStep++;
      }
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
