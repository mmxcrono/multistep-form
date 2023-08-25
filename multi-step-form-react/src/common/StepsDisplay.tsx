import styled from 'styled-components';

import { NumberAvatar } from '@/common/NumberAvatar';
import { useAppSelector } from '@/app/hooks';
import { selectCurrentStep } from '@/features/signUp/signUpSlice';

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
  const currentStep = useAppSelector(selectCurrentStep);

  return (
    <>
      <Container>
        {Array.from({ length: props.numSteps }, (_, index) => (
          <NumberAvatar
            key={index}
            $isActive={currentStep === index + 1}
            number={index + 1}
          />
        ))}
      </Container>
    </>
  );
};
