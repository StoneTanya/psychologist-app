// import { navList } from './route';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import styles from './style.module.css';

function NavDesktop() {
  // const { t, i18n } = useTranslation();
  const { t } = useTranslation();

  // смена языка
  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };
  const navList = t('nav.links', { returnObjects: true });
  return (
    <>
      <nav className={styles.nav__desktop}>
        <ul className={styles.menu__list}>
          {navList.map((nav, navId) => (
            <li key={navId} className={styles.menu__item}>
              <Link to={nav} smooth={true} duration={500} className={styles.menu__link}>
                {nav}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button> */}
    </>
  );
}
export default NavDesktop;
