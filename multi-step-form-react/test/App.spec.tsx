import { describe, it } from 'vitest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import { App } from '@/app/App';
import { AppText } from '@/enums/appText';

const SUITE = 'App';
const mockStore = configureStore([]);

describe(`${SUITE}`, () => {
  it(`${SUITE} - Initial state`, async ({ expect }) => {
    const initialState = { signUp: { name: '' } };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    // screen.debug();

    // Expect title
    expect(screen.getByTestId('title')).toHaveTextContent('Personal Info');

    // Expect step to be 1
    // step-1 should have active state
    expect(screen.getByTestId('step-1')).toHaveClass('active');
    expect(screen.getByTestId('step-2')).not.toHaveClass('active');
    expect(screen.getByTestId('step-3')).not.toHaveClass('active');
    expect(screen.getByTestId('step-4')).not.toHaveClass('active');

    // Expect description
    const description = screen.getByTestId('description');
    expect(description).toHaveTextContent(AppText.personalInfoDescription);
    // Expect input labels, placeholders

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

    const nextStep = screen.getByTestId('next-step');
    expect(nextStep).toBeInTheDocument();
    // Expect button to proceed
    // Expect button actions, data validation

    // states
    // 1-4
    // form values

    // navigate back to previous, next page, confirm final
  });
});
