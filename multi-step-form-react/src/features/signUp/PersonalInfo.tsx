import { AppText } from '@/enums/appText';
import {
  nextStep,
  selectEmail,
  selectName,
  selectPhone,
  selectStep,
  setEmail,
  setName,
  setPhone,
} from '@/features/signUp/signUpSlice';
import { useAppDispatch, useAppSelector } from '@/app/hooks';

export const PersonalInfo: React.FC = () => {
  const dispatch = useAppDispatch();

  const name = useAppSelector(selectName);
  const email = useAppSelector(selectEmail);
  const phone = useAppSelector(selectPhone);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setName(event.target.value));
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setEmail(event.target.value));
  };

  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setPhone(event.target.value));
  };

  const onNextStep = () => {
    dispatch(nextStep());
  };

  return (
    <>
      <section className="personal-info">
        <h1 data-testid="title">Personal Info</h1>
        <p className="description" data-testid="description">
          {AppText.personalInfoDescription}
        </p>
        <label htmlFor="name" data-testid="name-label">
          Name
          <input
            value={name}
            onChange={onNameChange}
            placeholder={AppText.namePlaceholder}
            name="name"
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="email" data-testid="email-label">
          Email
          <input
            value={email}
            onChange={onEmailChange}
            name="email"
            type="text"
            data-testid="email-input"
            placeholder={AppText.emailPlaceholder}
          />
        </label>
        <label htmlFor="phone" data-testid="phone-label">
          Phone
          <input
            value={phone}
            onChange={onPhoneChange}
            name="phone"
            type="text"
            data-testid="phone-input"
            placeholder={AppText.phonePlaceholder}
          />
        </label>
        <button
          type="button"
          className="next-step"
          data-testid="next-step"
          onClick={onNextStep}
        >
          Next Step
        </button>
      </section>
    </>
  );
};
