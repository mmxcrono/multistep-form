import { RootState } from '@/app/store';
import { AppText } from '@/enums/appText';
import { Steps } from '@/enums/Steps';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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

const initialState: SignUpState = {
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
      state = initialState;
    },
    submitPersonalInfo(state, action: PayloadAction<PersonalInfo>) {
      state.personalInfo = action.payload;
    },
    nextStep(state) {
      let isValid = true;

      // check if we can move to the next step
      if (state.currentStep === Steps.PersonalInfo) {
        const { name, email, phone } = state.personalInfo;

        if (!name) {
          state.personalInfo.nameError = AppText.FieldRequired;
          isValid = false;
        }

        if (!email) {
          state.personalInfo.emailError = AppText.FieldRequired;
          isValid = false;
        }

        if (!phone) {
          state.personalInfo.phoneError = AppText.FieldRequired;
          isValid = false;
        } else if (!/^\+1 \d{3} \d{3} \d{4}/.test(phone)) {
          isValid = false;
          state.personalInfo.phoneError = AppText.InvalidPhone;
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
