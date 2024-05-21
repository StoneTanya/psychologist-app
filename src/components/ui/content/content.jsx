import styles from './style.module.css';

function Content({ children, className }) {
  return <div className={`${styles.content} ${className}`}>{children}</div>;
}

export default Content;
