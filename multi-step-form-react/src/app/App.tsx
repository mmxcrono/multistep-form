import React from 'react';
import { ThemeProvider } from 'styled-components';

import { PersonalInfo } from '@/features/signUp/PersonalInfo';
import { selectStep } from '@/features/signUp/signUpSlice';

import './App.scss';
import { useAppSelector } from './hooks';
import { StepsDisplay } from '@/common/StepsDisplay';

const theme = {
  primaryColor: 'blue',
};

export const App: React.FC = () => {
  const step = useAppSelector(selectStep);

  return (
    <ThemeProvider theme={theme}>
      <StepsDisplay step={step} numSteps={4} />
      {step === 1 && <PersonalInfo />}
    </ThemeProvider>
  );
};
