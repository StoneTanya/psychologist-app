import { useContext } from 'react';
import { LangContext } from '../../app/App';

import styles from './style.module.css';

const translation = {
  about: {
    ru: 'Обо мне',
    en: 'About Me',
  },
  consultation: {
    ru: 'Консультации',
    en: 'Consultations',
  },
  payment: {
    ru: 'Оплата',
    en: 'Payment',
  },
  qna: {
    ru: 'Вопрос-ответ',
    en: 'Q&A',
  },
  tests: {
    ru: 'Тесты',
    en: 'Tests',
  },
};

function Nav() {
  const { lang, toggleLang } = useContext(LangContext);

  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {Object.keys(translation).map((item) => (
          <li key={item} className={styles.menu__item}>
            <a href="#" className={styles.menu__link}>
              {translation[item][lang]}
            </a>
          </li>
        ))}
        <li>
          <a href="#" onClick={toggleLang}>
            {lang === 'ru' ? 'Сменить язык' : 'Change language'}
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
