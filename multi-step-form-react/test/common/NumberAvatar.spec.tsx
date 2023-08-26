import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import { NumberAvatar } from '@/common/NumberAvatar';

const SUITE = 'NumberAvatar';

describe(`${SUITE}`, () => {
  it(`${SUITE} - Non-Active Step 1 should be displayed`, async ({ expect }) => {
    const { getByText } = render(<NumberAvatar number={1} $isActive={false} />);
    expect(getByText('1')).toBeInTheDocument();
  });
  it(`${SUITE} - Active Step 2 should be displayed`, async ({ expect }) => {
    const { getByText } = render(<NumberAvatar number={2} $isActive={true} />);
    expect(getByText('2')).toBeInTheDocument();
  });
});
