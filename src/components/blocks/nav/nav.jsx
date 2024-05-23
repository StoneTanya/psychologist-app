import styles from './style.module.css';

function Nav() {
  const navList = ['Обо мне', 'Консультации', 'Оплата', 'Вопрос-ответ', 'Тесты'];

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
    </nav>
  );
}
export default Nav;
