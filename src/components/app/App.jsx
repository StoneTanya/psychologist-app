import { createContext, useState } from 'react';
import PageWrapper from '../layout/page-wrapper/page-wrapper';

export const LangContext = createContext(null);

function App() {
  const [lang, setLang] = useState('ru');

  const toggleLang = () => {
    if (lang === 'ru') setLang('en');
    if (lang === 'en') setLang('ru');
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      <PageWrapper />
    </LangContext.Provider>
  );
}

export default App;
