import React from 'react';
import styled from 'styled-components';
interface ContainerProps {
  $isActive: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  place-items: center;
  background-color: var(--clr-accent-800);
  border-radius: 50%;
  border: 2px solid transparent;
  height: 50px;
  aspect-ratio: 1;
  position: relative;

  ${(props) =>
    props.$isActive &&
    `
    color: var(--clr-primary-400);
    border-color: var(--clr-primary-400);
  `}
`;

const Number = styled.div`
  position: absolute;
  inset: 15px;
  text-align: center;
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
