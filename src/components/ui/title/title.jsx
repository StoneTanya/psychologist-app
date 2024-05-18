import styles from "./style.module.css";

/* компонент должен возвращать все предусмотренные макетом заголовки,
от самого большого до самого маленького, т.е. используем props и children, а пока макет не утвержден, Title возвращает h1 */

function Title({ text }) {
  return <h1 className={styles.h1}>{text}</h1>;
}

export default Title;
