import { PersonalInfo } from '@/features/signUp/PersonalInfo';
import './App.scss';
import { useAppSelector } from './hooks';
import { selectStep } from '@/features/signUp/signUpSlice';

export const App: React.FC = () => {
  const step = useAppSelector(selectStep);

  return (
    <>
      <section className="steps">
        <ul className="steps__list">
          {Array.from({ length: 4 }, (_, index) => (
            <li
              key={index}
              className={`steps__list-item ${
                step === index + 1 ? 'active' : ''
              }`}
              data-testid={`step-${index + 1}`}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </section>
      <PersonalInfo />
    </>
  );
};
