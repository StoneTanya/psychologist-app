import Nav from '../../blocks/nav/nav';
// import Logo from '../../ui/logo/logo';
import Container from '../../ui/container/container';
import styles from './style.module.css';

function Header() {
  return (
    <header className="wrapper">
      <Container>
        <div className={styles.header__wrapper}>
          {/* <Logo /> */}
          <Nav />
        </div>
      </Container>
    </header>
  );
}
export default Header;
