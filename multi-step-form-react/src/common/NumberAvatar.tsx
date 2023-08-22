import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  place-items: center;
  background-color: var(--clr-accent-800);
  border-radius: 50%;
  border: 2px solid transparent;
  height: 50px;
  aspect-ratio: 1;
  position: relative;

  &.active {
    color: var(--clr-primary-400);
    border-color: var(--clr-primary-400);
  }
`;

const Number = styled.div`
  position: absolute;
  inset: 15px;
  text-align: center;
`;

interface Props {
  number: number;
  className?: string;
}

export const NumberAvatar: React.FC<Props> = (props: Props) => {
  return (
    <Container className={props.className} data-testid={`step-${props.number}`}>
      <Number>{props.number}</Number>
    </Container>
  );
};
