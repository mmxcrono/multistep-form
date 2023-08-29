import { describe, it } from 'vitest';
import { Provider } from 'react-redux';
import { render, waitFor } from '@testing-library/react';

import { AppText } from '@/enums/AppText';
import { PersonalInfo } from '@/features/signUp/PersonalInfo';
import { FormText } from '@/enums/FormText';
import store from '@/app/store.ts';
import { nextStep } from '@/features/signUp/signUpSlice';

const SUITE = 'SignUp - PersonalInfo';

// Learnings
// 1. Testing implementation details is bad
// 2. Use data-testid only when absolutely necessary
// 3. Test components and the props

describe(`${SUITE}`, () => {
  it(`${SUITE} - Should show Personal Info form`, async ({ expect }) => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <PersonalInfo />
      </Provider>,
    );

    // title
    expect(getByText(AppText.PersonalInfoTitle)).toBeInTheDocument();

    // description
    expect(getByText(AppText.PersonalInfoDescription)).toBeInTheDocument();

    // name label
    expect(getByText(FormText.NameLabel)).toBeInTheDocument();

    // name input
    const nameInput = getByPlaceholderText(FormText.NamePlaceholder);
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveValue('');

    // email label
    expect(getByText(FormText.EmailLabel)).toBeInTheDocument();
    // email input
    const emailInput = getByPlaceholderText(FormText.EmailPlaceholder);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveValue('');

    // phone label
    expect(getByText(FormText.PhoneLabel)).toBeInTheDocument();
    // phone input
    const phoneInput = getByPlaceholderText(FormText.PhonePlaceholder);
    expect(phoneInput).toBeInTheDocument();
    expect(phoneInput).toHaveValue('');
  });

  it(`${SUITE} - Should require name`, async ({ expect }) => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <PersonalInfo />
      </Provider>,
    );

    const nameInput = getByPlaceholderText(FormText.NamePlaceholder);
    expect(nameInput).toHaveValue('');
    store.dispatch(nextStep());

    await waitFor(() => {
      expect(getByText('This field is required')).toBeInTheDocument();
    });
  });

  it(`${SUITE} - Should require email`, async ({ expect }) => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <PersonalInfo />
      </Provider>,
    );

    const emailInput = getByPlaceholderText(FormText.EmailPlaceholder);
    expect(emailInput).toHaveValue('');
    store.dispatch(nextStep());

    await waitFor(() => {
      expect(getByText('This field is required')).toBeInTheDocument();
    });
  });

  it(`${SUITE} - Should require phone`, async ({ expect }) => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <PersonalInfo />
      </Provider>,
    );

    const phoneInput = getByPlaceholderText(FormText.PhonePlaceholder);
    expect(phoneInput).toHaveValue('');
    store.dispatch(nextStep());

    await waitFor(() => {
      expect(getByText('This field is required')).toBeInTheDocument();
    });
  });
});
