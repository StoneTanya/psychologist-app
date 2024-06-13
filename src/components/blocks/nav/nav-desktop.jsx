import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import styles from './style.module.css';

function NavDesktop() {
  const { t } = useTranslation();
  const navList = t('nav.links', { returnObjects: true });

  return (
    <nav className={styles.nav__desktop}>
      <ul className={styles.menu__list}>
        {navList.map((nav) => (
          <li key={nav.id} className={styles.menu__item}>
            <Link to={nav.id} smooth={true} duration={500} className={styles.menu__link}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavDesktop;
