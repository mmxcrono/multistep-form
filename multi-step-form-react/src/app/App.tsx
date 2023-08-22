import React from 'react';

import { PersonalInfo } from '@/features/signUp/PersonalInfo';
import { selectStep } from '@/features/signUp/signUpSlice';

import './App.scss';
import { useAppSelector } from './hooks';
import { StepsDisplay } from '@/common/StepsDisplay';

export const App: React.FC = () => {
  const step = useAppSelector(selectStep);

  return (
    <>
      <StepsDisplay step={step} numSteps={4} />
      {step === 1 && <PersonalInfo />}
    </>
  );
};
