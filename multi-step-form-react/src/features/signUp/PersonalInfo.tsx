import { useState } from 'react';

import { AppText } from '@/enums/appText';
import {
  nextStep,
  selectPersonalInfo,
  submitPersonalInfo,
} from '@/features/signUp/signUpSlice';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { MainTitle } from '@/common/MainTitle';

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
        <MainTitle title="Personal Info" />
        <p className="description">{AppText.personalInfoDescription}</p>
        <label htmlFor="name">
          Name
          <input
            id="Name"
            value={name}
            onChange={onNameChange}
            placeholder={AppText.namePlaceholder}
            name="name"
            type="text"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            value={email}
            onChange={onEmailChange}
            name="email"
            type="text"
            placeholder={AppText.emailPlaceholder}
          />
        </label>
        <label htmlFor="phone">
          Phone
          <input
            id="phone"
            value={phone}
            onChange={onPhoneChange}
            name="phone"
            type="text"
            placeholder={AppText.phonePlaceholder}
          />
        </label>
        <button type="button" className="next-step" onClick={onNextStep}>
          Next Step
        </button>
      </section>
    </>
  );
};
