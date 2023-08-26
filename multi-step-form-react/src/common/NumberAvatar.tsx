import React from 'react';
import styled from 'styled-components';
interface ContainerProps {
  $isActive: boolean;
}

const Container = styled.article<ContainerProps>`
  display: flex;
  border-radius: 50%;
  border: var(--br-100) solid var(--clr-neutral-900);
  color: var(--clr-neutral-900);
  height: 32px;
  aspect-ratio: 1;
  position: relative;
  font-weight: var(--fw-semi-bold);

  ${(props) =>
    props.$isActive &&
    `
    background-color: var(--clr-primary-800);
    color: var(--clr-primary-400);
    border-color: var(--clr-neutral-600);
  `};
`;

const Number = styled.span`
  position: absolute;
  inset: 7px;
  text-align: center;
  font-size: var(--fs-200);
`;

interface Props extends ContainerProps {
  number: number;
}

export const NumberAvatar: React.FC<Props> = ({ number, $isActive }) => {
  return (
    <Container data-active={$isActive} $isActive={$isActive}>
      <Number>{number}</Number>
    </Container>
  );
};
