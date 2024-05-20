import styles from "./style.module.css";

function Nav() {
  return (
    <nav className={styles["menu"]}>
      <ul className={styles["menu__list"]}>
        <li className={styles["menu__item"]}>
          <a href="#" className={styles["menu__link"]}>
            Обо мне
          </a>
        </li>
        <li className={styles["menu__item"]}>
          <a href="#" className={styles["menu__link"]}>
            Консультации
          </a>
        </li>
        <li className={styles["menu__item"]}>
          <a href="#" className={styles["menu__link"]}>
            Оплата
          </a>
        </li>
        <li className={styles["menu__item"]}>
          <a href="#" className={styles["menu__link"]}>
            Вопрос-Ответ
          </a>
        </li>
        <li className={styles["menu__item"]}>
          <a href="#" className={styles["menu__link"]}>
            Тесты
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
