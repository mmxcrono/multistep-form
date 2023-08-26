import { useState } from 'react';
import { styled } from 'styled-components';

import { AppText } from '@/enums/appText';
import { selectPersonalInfo } from '@/features/signUp/signUpSlice';
import { useAppSelector } from '@/app/hooks';
import { MainTitle } from '@/common/MainTitle';
import { StyledInput } from '@/common/inputs/StyledInput';

const Container = styled.div`
  background-color: white;
  border-radius: var(--br-500);
  padding: 1.6em;
  margin: 1em;
`;

export const PersonalInfo: React.FC = () => {
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

  return (
    <>
      <Container>
        <MainTitle title="Personal Info" />
        <p className="description">{AppText.personalInfoDescription}</p>
        <form>
          <label htmlFor="name">
            Name
            <StyledInput
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
            <StyledInput
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
            <StyledInput
              id="phone"
              value={phone}
              onChange={onPhoneChange}
              name="phone"
              type="text"
              placeholder={AppText.phonePlaceholder}
            />
          </label>
        </form>
      </Container>
    </>
  );
};
