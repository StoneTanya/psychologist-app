import { navList } from './route';
import styles from './style.module.css';

function NavDesktop() {
  return (
    <>
    <nav className={styles.nav__desktop}>
      <ul className={styles.menu__list}>
        {navList.map((nav, navId) => (
          <li key={navId} className={styles.menu__item}>
            <a href="#" className={styles.menu__link}>
              {nav}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </>
  );
}
export default NavDesktop;
