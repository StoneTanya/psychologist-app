import styles from './style.module.css';

/* компонент должен возвращать все предусмотренные макетом заголовки,
от самого большого до самого маленького, т.е. используем props и children, а пока макет не утвержден, Title возвращает h1 */

function Title({ children, size, level }) {
  const CustomTitleTag = `h${level}`;

  return (
    <CustomTitleTag className={`${styles.title} ${size ? `title_${size}` : ''}`}>
      {children}
    </CustomTitleTag>
  );
}

export default Title;
