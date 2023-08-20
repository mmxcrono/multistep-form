import { combineReducers } from '@reduxjs/toolkit';

import signUpReducer from '@/features/signUp/signUpSlice';

export const rootReducer = combineReducers({
  signUp: signUpReducer,
});
