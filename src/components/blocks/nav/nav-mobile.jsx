import { useState, useRef, useEffect } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import { scroller } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import styles from './style.module.css';

function NavMobile() {
  const { t, i18n } = useTranslation();

  const [isOpen, setOpen] = useState(false);

  const ref = useRef(null);

  // смена языка
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const navList = t('nav.links', { returnObjects: true });

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const clickOutsidelistener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) return;
        handler(event);
      };
      document.addEventListener('mousedown', clickOutsidelistener);
      return () => {
        document.removeEventListener('mousedown', clickOutsidelistener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(ref, () => setOpen(false));

  const scroll = (element) => {
    setOpen((prev) => !prev);
    scroller.scrollTo(element, {
      smooth: true,
      duration: 500,
    });
  };

  useEffect(() => {
    let prevScrollY = window.scrollY;
    const scrollDownlistener = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < prevScrollY) return;
      setOpen(false);
    };
    document.addEventListener('scroll', scrollDownlistener);
    return () => {
      document.removeEventListener('scroll', scrollDownlistener);
    };
  }, []);

  return (
    <div ref={ref} className={styles.nav_mobile}>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        direction="right"
        color="var(--accent-color)"
        size={35}
      />
      {isOpen && (
        <div className={styles.nav_mobile__wrapper}>
          <ul className={styles.nav_mobile__list}>
            {navList.map((nav, navId) => {
              return (
                <li key={navId} className={styles.nav_mobile__item}>
                  <a onClick={() => scroll(nav)}>
                    <span>{nav}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('ru')}>RU</button>
        </div>
      )}
    </div>
  );
}

export default NavMobile;
