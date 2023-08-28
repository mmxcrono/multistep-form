import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { PersonalInfo } from '@/features/signUp/PersonalInfo';
import { nextStep, selectCurrentStep } from '@/features/signUp/signUpSlice';
import { StepsDisplay } from '@/common/StepsDisplay';
import { StyledButton } from '@/styled-components/ButtonStyles';
import { Steps } from '@/enums/Steps';

import { useAppDispatch, useAppSelector } from './hooks';

const theme = {
  primaryColor: 'blue',
};

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

const FormControls = styled.div`
  background-color: var(--clr-neutral-900);
  display: flex;
  justify-content: flex-end;
  padding: 1em;
`;

const Attribution = styled.div`
  font-size: 11px;
  text-align: center;
  & a {
    color: hsl(228, 45%, 44%);
  }
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
          {step === Steps.PersonalInfo && <PersonalInfo />}
        </Main>
        <FormControls>
          <StyledButton type="button" onClick={onNextStep}>
            Next Step
          </StyledButton>
        </FormControls>
        <footer>
          <Attribution>
            Challenge by{' '}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{' '}
            <a href="https://mmxcrono.github.io" target="_blank">
              Hoang Nguyen
            </a>
            .
          </Attribution>
        </footer>
      </Wrapper>
    </ThemeProvider>
  );
};
