import './App.scss'
import { AppText } from './enums/AppText';

interface AppProps {
  title: string;
}

export const App: React.FC<AppProps> = ({ title }) => {

  return (
    <>
      <h1 role='heading'>{ title }</h1>
      <label htmlFor="name">Name</label>
      <input name="name" type="text" data-testid="input-name" placeholder={AppText.namePlaceholder} />
    </>
  )
}
