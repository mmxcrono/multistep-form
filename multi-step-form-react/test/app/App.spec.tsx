import { describe, it } from 'vitest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { App } from '@/app/App';

const SUITE = 'App';
const mockStore = configureStore([]);

describe(`${SUITE}`, () => {
  it(`${SUITE} - Initial state`, async ({ expect }) => {
    const initialState = { signUp: { step: 1 } };
    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('4')).toBeInTheDocument();

    // Next Step button
    expect(getByText('Personal Info')).toBeInTheDocument();
    expect(getByText('Next Step')).toBeInTheDocument();
  });
});
