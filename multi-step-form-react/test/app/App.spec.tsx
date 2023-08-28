import { describe, it } from 'vitest';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from '@/app/store.ts';
import { App } from '@/app/App';

const SUITE = 'App';

describe(`${SUITE}`, () => {
  it(`${SUITE} - Initial app state should show Personal Info form`, async ({
    expect,
  }) => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('4')).toBeInTheDocument();

    expect(getByText('Personal Info')).toBeInTheDocument();
    expect(getByText('Next Step')).toBeInTheDocument();
  });
});
