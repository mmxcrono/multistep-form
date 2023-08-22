import { describe, it } from 'vitest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import { App } from '@/app/App';

const SUITE = 'App';
const mockStore = configureStore([]);

describe(`${SUITE}`, () => {
  it(`${SUITE} - Initial state`, async ({ expect }) => {
    const initialState = { signUp: { personalInfo: { name: '' }, step: 1 } };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(screen.getByTestId('steps-display')).toBeInTheDocument();
    expect(screen.getByTestId('step-1')).toHaveClass('active');
    expect(screen.getByTestId('step-2')).not.toHaveClass('active');
    expect(screen.getByTestId('step-3')).not.toHaveClass('active');
    expect(screen.getByTestId('step-4')).not.toHaveClass('active');
  });
});
