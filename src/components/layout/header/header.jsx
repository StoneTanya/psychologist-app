import NavDesktop from '../../blocks/nav/nav-desktop';
import NavMobile from '../../blocks/nav/nav-mobile';
import Container from '../../ui/container/container';
import styles from './style.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__wrapper}>
          <NavDesktop />
          <NavMobile />
        </div>
      </Container>
    </header>
  );
}
export default Header;
