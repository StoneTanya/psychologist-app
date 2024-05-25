import Nav from '../../blocks/nav/nav';
import Container from '../../ui/container/container';
import styles from './style.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__wrapper}>
          <Nav />
        </div>
      </Container>
    </header>
  );
}
export default Header;
