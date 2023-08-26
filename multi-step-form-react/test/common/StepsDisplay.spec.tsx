import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import { StepsDisplay } from '@/common/StepsDisplay';

const SUITE = 'StepsDisplay';

describe(`${SUITE}`, () => {
  it(`${SUITE} - Steps 1 - 4 should be displayed`, async ({ expect }) => {
    const { getByText } = render(<StepsDisplay step={1} numSteps={4} />);

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('4')).toBeInTheDocument();
  });
});
