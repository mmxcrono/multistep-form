import styled from 'styled-components';

import { NumberAvatar } from '@/common/NumberAvatar';
import BackgroundSvg from '@/assets/bg-sidebar-mobile.svg';

const Container = styled.div`
  background-image: url(${BackgroundSvg});
  background-size: cover;
  display: flex;
  justify-content: center;
  gap: 1em;
  padding: 1em;
  padding-bottom: 5em;
  margin-bottom: -3em;
`;

interface Props {
  step: number;
  numSteps: number;
}

export const StepsDisplay: React.FC<Props> = ({ step, numSteps }: Props) => {
  return (
    <>
      <Container>
        {Array.from({ length: numSteps }, (_, index) => (
          <NumberAvatar
            key={index}
            $isActive={step === index + 1}
            number={index + 1}
          />
        ))}
      </Container>
    </>
  );
};
