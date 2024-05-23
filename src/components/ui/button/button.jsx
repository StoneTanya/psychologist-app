import styles from './style.module.css';

function Button({ children, link, className='' }) {
  return link ? (
    <a className={`${styles.button} ${className}`} href={link} target="blank">
      {children}
    </a>
  ) : (
    <button type="button" className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
