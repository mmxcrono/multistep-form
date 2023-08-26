import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { PersonalInfo } from '@/features/signUp/PersonalInfo';
import { nextStep, selectCurrentStep } from '@/features/signUp/signUpSlice';
import { StepsDisplay } from '@/common/StepsDisplay';

import './App.scss';
import { useAppDispatch, useAppSelector } from './hooks';
import { StyledButton } from '@/common/buttons/StyledButton';

const theme = {
  primaryColor: 'blue',
};

const FormControls = styled.div`
  background-color: var(--clr-neutral-900);
  display: flex;
  justify-content: flex-end;
  padding: 1em;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
`;

const Main = styled.main`
  display: block;
  flex: 1;
  overflow: auto;
`;

export const App: React.FC = () => {
  const step = useAppSelector(selectCurrentStep);
  const dispatch = useAppDispatch();

  const onNextStep = () => {
    dispatch(nextStep());
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Main>
          <StepsDisplay step={step} numSteps={4} />
          {step === 1 && <PersonalInfo />}
        </Main>
        <FormControls>
          <StyledButton type="button" onClick={onNextStep}>
            Next Step
          </StyledButton>
        </FormControls>
        <footer>
          <div className="attribution">
            Challenge by{' '}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Hoang Nguyen</a>.
          </div>
        </footer>
      </Wrapper>
    </ThemeProvider>
  );
};
