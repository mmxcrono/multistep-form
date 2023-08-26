import { styled } from 'styled-components';

const Container = styled.h1`
  font-size: var(--fs-500);
  font-weight: var(--fw-bold);
  color: var(--clr-primary-400);
  margin-bottom: 0.5em;
`;

interface Props {
  title: string;
}

export const MainTitle: React.FC<Props> = ({ title }) => {
  return <Container>{title}</Container>;
};
