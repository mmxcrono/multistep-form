import { useState } from 'react';
import { styled } from 'styled-components';

import { selectPersonalInfo } from '@/features/signUp/signUpSlice';
import { useAppSelector } from '@/app/hooks';
import { StyledLabel, StyledTitle } from '@/styled-components/TextStyles';
import { StyledInput } from '@/styled-components/InputStyles';
import { FormText } from '@/enums/FormText';
import { AppText } from '@/enums/AppText';

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
        <StyledTitle>{AppText.PersonalInfoTitle}</StyledTitle>
        <p className="description">{AppText.PersonalInfoDescription}</p>
        <form>
          <StyledLabel htmlFor={FormText.NameLabel}>
            {FormText.NameLabel}
            <StyledInput
              id={FormText.NameLabel}
              value={name}
              onChange={onNameChange}
              placeholder={FormText.NamePlaceholder}
              name={FormText.NameLabel}
              type="text"
            />
          </StyledLabel>

          <StyledLabel htmlFor={FormText.EmailLabel}>
            {FormText.EmailLabel}
            <StyledInput
              id={FormText.EmailLabel}
              value={email}
              onChange={onEmailChange}
              name={FormText.EmailLabel}
              type="text"
              placeholder={FormText.EmailPlaceholder}
            />
          </StyledLabel>
          <StyledLabel htmlFor={FormText.PhoneLabel}>
            {FormText.PhoneLabel}
            <StyledInput
              id={FormText.PhoneLabel}
              value={phone}
              onChange={onPhoneChange}
              name={FormText.PhoneLabel}
              type="text"
              placeholder={FormText.PhonePlaceholder}
            />
          </StyledLabel>
        </form>
      </Container>
    </>
  );
};
