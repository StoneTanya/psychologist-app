import styles from "./style.module.css";
import PropTypes from 'prop-types';

/* компонент должен возвращать все предусмотренные макетом заголовки,
от самого большого до самого маленького, т.е. используем props и children, а пока макет не утвержден, Title возвращает h1 */

function Title({ text, size }) {
  return <h1 className={`${styles.title} ${size ? `title_${size}` : ''}`}>{text}</h1>;
}

Title.propTypes = {
  children: PropTypes.string,
  size: PropTypes.string
}

export default Title;
