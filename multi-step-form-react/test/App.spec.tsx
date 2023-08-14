import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from '@/App';
import { AppText } from '@/enums/AppText';

const SUITE = 'App';

describe(`${SUITE}`, () => {
  it(`${SUITE} - true`, async ({ expect }) => {
    const title = 'Test Title';

    render(<App title={title} />);

    screen.debug();

    expect(screen.getByRole('heading')).toHaveTextContent(title)

    // Expect step to be 1
    // Expect title
    expect(screen.getByTestId('input-name')).not.toBe(undefined);
    expect(screen.getByPlaceholderText(AppText.namePlaceholder)).not.toBe(undefined);

    // Expect description
    // Expect input labels, placeholders
    // Expect button to proceed
    // Expect button actions, data validation

  })
})