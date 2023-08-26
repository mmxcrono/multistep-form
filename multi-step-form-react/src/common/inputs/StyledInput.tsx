import { styled } from 'styled-components';

export const StyledInput = styled.input`
  background-color: var(--clr-neutral-900);
  border-radius: var(--br-300);
  color: var(--clr-primary-400);
  border: 1px solid var(--clr-neutral-700);
  font-size: var(--fs-300);
  font-weight: var(--fw-500);

  padding: 0.4em 0.9em;
  width: 100%;
  display: block;

  &::placeholder {
    color: var(--clr-neutral-600);
  }
`;
