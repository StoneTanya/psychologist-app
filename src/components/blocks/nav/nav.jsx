import styles from './style.module.css';
import { useTranslation } from 'react-i18next';

function Nav() {
  // const { t, i18n } = useTranslation();
  const { t } = useTranslation();

  // смена языка
  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };

  const navList = t('nav.links', { returnObjects: true });

  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {navList.map((nav, navId) => (
          <li key={navId} className={styles.menu__item}>
            <a href="#" className={styles.menu__link}>
              {nav}
            </a>
          </li>
        ))}
      </ul>
      {/* <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button> */}
    </nav>
  );
}
export default Nav;
