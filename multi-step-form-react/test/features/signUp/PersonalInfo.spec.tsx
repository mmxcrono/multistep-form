import { describe, it } from 'vitest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import { AppText } from '@/enums/appText';
import { PersonalInfo } from '@/features/signUp/PersonalInfo';

const SUITE = 'SignUp - PersonalInfo';
const mockStore = configureStore([]);

describe(`${SUITE}`, () => {
  it(`${SUITE} - Initial state`, async ({ expect }) => {
    const initialState = { signUp: { name: '', step: 1 } };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <PersonalInfo />
      </Provider>,
    );

    // Expect title
    expect(screen.getByTestId('title')).toHaveTextContent('Personal Info');

    // Expect description
    const description = screen.getByTestId('description');
    expect(description).toHaveTextContent(AppText.personalInfoDescription);

    // Expect name input
    const nameLabel = screen.getByTestId('name-label');
    const nameField = screen.getByTestId('name-input');
    expect(nameLabel).toHaveTextContent('Name');
    expect(nameField).toHaveValue('');

    // Expect email input
    const emailLabel = screen.getByTestId('email-label');
    const emailField = screen.getByTestId('email-input');
    expect(emailLabel).toHaveTextContent('Email');
    expect(emailField).toHaveValue('');

    // Expect phone input
    const phoneLabel = screen.getByTestId('phone-label');
    const phoneField = screen.getByTestId('phone-input');
    expect(phoneLabel).toHaveTextContent('Phone');
    expect(phoneField).toHaveValue('');

    // Next Step button
    const nextStep = screen.getByTestId('next-step');
    expect(nextStep).toBeInTheDocument();
  });
});
