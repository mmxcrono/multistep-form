import {describe, it} from 'vitest';
const SUITE = 'test';
describe(`${SUITE}`, () => {
  it(`${SUITE} - true`, async ({ expect }) => {
    expect(true).toBe(true);
  })
})