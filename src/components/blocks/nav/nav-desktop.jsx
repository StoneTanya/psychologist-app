import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import styles from './style.module.css';

function NavDesktop() {
  const { t } = useTranslation();
  const navList = t('nav.links', { returnObjects: true });

  return (
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
  );
}
export default NavDesktop;
