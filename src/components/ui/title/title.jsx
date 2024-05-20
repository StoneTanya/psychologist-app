import styles from "./style.module.css";

/* компонент должен возвращать все предусмотренные макетом заголовки,
от самого большого до самого маленького, т.е. используем props и children, а пока макет не утвержден, Title возвращает h1 */

function Title({ children, size }) {
  return <h1 className={`${styles.title} ${size ? `title_${size}` : ''}`}>{children}</h1>;
}

export default Title;
