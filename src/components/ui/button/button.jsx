import styles from './style.module.css';

function Button({ children, link, className = '', handler = {} }) {
  return link ? (
    <a className={`${styles.button} ${className}`} href={link} target="blank">
      {children}
    </a>
  ) : (
    <button type="button" className={`${styles.button} ${className}`} onClick={handler}>
      {children}
    </button>
  );
}

export default Button;
