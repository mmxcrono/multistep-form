import React, { FormEvent, useState } from 'react';

import {
  nextStep,
  selectPersonalInfo,
  submitPersonalInfo,
} from '@/features/signUp/signUpSlice';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  StyledDescription,
  StyledLabel,
  StyledTitle,
} from '@/styled-components/TextStyles';
import { StyledInput } from '@/styled-components/InputStyles';
import { FormText } from '@/enums/FormText';
import { AppText } from '@/enums/AppText';
import { FormContainer } from '@/styled-components/ContainerStyles';

export const PersonalInfo: React.FC = () => {
  const personalInfo = useAppSelector(selectPersonalInfo);

  const dispatch = useAppDispatch();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(submitPersonalInfo(formData));
    dispatch(nextStep());
  };

  const [formData, setFormData] = useState(personalInfo);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <StyledTitle>{AppText.PersonalInfoTitle}</StyledTitle>
        <StyledDescription>{AppText.PersonalInfoDescription}</StyledDescription>

        <StyledLabel htmlFor={FormText.NameId}>
          {FormText.NameLabel}
          <StyledInput
            id={FormText.NameId}
            value={formData.name}
            onChange={handleInputChange}
            placeholder={FormText.NamePlaceholder}
            name={FormText.NameId}
          />
          {personalInfo.nameError && <p>{personalInfo.nameError}</p>}
        </StyledLabel>

        <StyledLabel htmlFor={FormText.EmailId}>
          {FormText.EmailLabel}
          <StyledInput
            id={FormText.EmailId}
            value={formData.email}
            onChange={handleInputChange}
            name={FormText.EmailId}
            placeholder={FormText.EmailPlaceholder}
          />
        </StyledLabel>

        <StyledLabel htmlFor={FormText.PhoneId}>
          {FormText.PhoneLabel}
          <StyledInput
            id={FormText.PhoneId}
            value={formData.phone}
            onChange={handleInputChange}
            name={FormText.PhoneId}
            placeholder={FormText.PhonePlaceholder}
          />
        </StyledLabel>
        <button type="submit"></button>
      </FormContainer>
    </>
  );
};
