import { describe, it } from 'vitest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { AppText } from '@/enums/appText';
import { PersonalInfo } from '@/features/signUp/PersonalInfo';

const SUITE = 'SignUp - PersonalInfo';
const mockStore = configureStore([]);

// Learnings
// 1. Testing implementation details is bad
// 2. Use data-testid only when absolutely necessary
// 3. Test components and the props

describe(`${SUITE}`, () => {
  it(`${SUITE} - Initial state`, async ({ expect }) => {
    const initialState = { signUp: { personalInfo: { name: '' }, step: 1 } };
    const store = mockStore(initialState);

    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <PersonalInfo />
      </Provider>,
    );

    // title
    expect(getByText('Personal Info')).toBeInTheDocument();

    // description
    expect(getByText(AppText.personalInfoDescription)).toBeInTheDocument();

    // name label
    expect(getByText('Name')).toBeInTheDocument();
    // name input
    const nameInput = getByPlaceholderText(AppText.namePlaceholder);
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveValue('');

    // email label
    expect(getByText('Email')).toBeInTheDocument();
    // email input
    const emailInput = getByPlaceholderText(AppText.emailPlaceholder);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveValue('');

    // phone label
    expect(getByText('Phone')).toBeInTheDocument();
    // phone input
    const phoneInput = getByPlaceholderText(AppText.phonePlaceholder);
    expect(phoneInput).toBeInTheDocument();
    expect(phoneInput).toHaveValue('');
  });
});
