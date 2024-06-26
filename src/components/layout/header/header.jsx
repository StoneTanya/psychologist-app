import NavDesktop from '../../blocks/nav/nav-desktop';
import NavMobile from '../../blocks/nav/nav-mobile';
import { useEffect, useState } from 'react';
import Container from '../../ui/container/container';
import styles from './style.module.css';
import LangButtons from '../../blocks/lang-toggle/lang-buttons';

function Header() {
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const isDown = scrollY > lastScrollY;
      if (isDown !== scrollDown && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDown(isDown);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDown]);

  return (
    <header className={`${styles.header} ${scrollDown ? styles.header_down : ''}`}>
      <Container>
        <div className={styles.header__wrapper}>
          <NavDesktop />
          <NavMobile />
          <LangButtons className={styles.header__buttons_box} />
        </div>
      </Container>
    </header>
  );
}
export default Header;
