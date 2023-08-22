import styled from 'styled-components';

import { NumberAvatar } from '@/common/NumberAvatar';
import { useAppSelector } from '@/app/hooks';
import { selectStep } from '@/features/signUp/signUpSlice';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  padding: 1em;
`;

interface Props {
  step: number;
  numSteps: number;
}

export const StepsDisplay: React.FC<Props> = (props: Props) => {
  const step = useAppSelector(selectStep);

  return (
    <>
      <Container className="steps-display" data-testid="steps-display">
        {Array.from({ length: props.numSteps }, (_, index) => (
          <NumberAvatar
            key={index}
            className={`steps-display__step ${
              step === index + 1 ? 'active' : ''
            }`}
            number={index + 1}
          />
        ))}
      </Container>
    </>
  );
};
