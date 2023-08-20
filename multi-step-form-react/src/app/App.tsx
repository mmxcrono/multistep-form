import { useState } from 'react';

import { AppText } from '@/enums/appText';
import {
  selectEmail,
  selectName,
  selectPhone,
  setEmail,
  setName,
  setPhone,
} from '@/features/signUp/signUpSlice';

import './App.scss';
import { useAppDispatch, useAppSelector } from './hooks';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [activeStep, setActiveStep] = useState<number>(1);

  const name = useAppSelector(selectName);
  const email = useAppSelector(selectEmail);
  const phone = useAppSelector(selectPhone);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setName(event.target.value));
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setEmail(event.target.value));
  };

  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setPhone(event.target.value));
  };

  const onNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <>
      <section className="steps">
        <ul className="steps__list">
          {Array.from({ length: 4 }, (_, index) => (
            <li
              key={index}
              className={`steps__list-item ${
                activeStep === index + 1 ? 'active' : ''
              }`}
              data-testid={`step-${index + 1}`}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </section>

      <section className="personal-info">
        <h1 data-testid="title">Personal Info</h1>
        <p className="description" data-testid="description">
          {AppText.personalInfoDescription}
        </p>
        <label htmlFor="name" data-testid="name-label">
          Name
          <input
            value={name}
            onChange={onNameChange}
            placeholder={AppText.namePlaceholder}
            name="name"
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="email" data-testid="email-label">
          Email
          <input
            value={email}
            onChange={onEmailChange}
            name="email"
            type="text"
            data-testid="email-input"
            placeholder={AppText.emailPlaceholder}
          />
        </label>
        <label htmlFor="phone" data-testid="phone-label">
          Phone
          <input
            value={phone}
            onChange={onPhoneChange}
            name="phone"
            type="text"
            data-testid="phone-input"
            placeholder={AppText.phonePlaceholder}
          />
        </label>
        <button
          type="button"
          className="next-step"
          data-testid="next-step"
          onClick={onNextStep}
        >
          Next Step
        </button>
      </section>
    </>
  );
};
