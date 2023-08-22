import { AppText } from '@/enums/appText';
import {
  nextStep,
  selectPersonalInfo,
  submitPersonalInfo,
} from '@/features/signUp/signUpSlice';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useState } from 'react';

export const PersonalInfo: React.FC = () => {
  const dispatch = useAppDispatch();

  const personalInfo = useAppSelector(selectPersonalInfo);

  const [name, setName] = useState(personalInfo.name);
  const [email, setEmail] = useState(personalInfo.email);
  const [phone, setPhone] = useState(personalInfo.phone);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPhone(event.target.value);
  };

  const onNextStep = () => {
    const isValid = false;
    if (isValid) {
      dispatch(
        submitPersonalInfo({
          name,
          email,
          phone,
        }),
      );
      dispatch(nextStep());
    } else {
      console.log('display errors');
    }
  };

  return (
    <>
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
