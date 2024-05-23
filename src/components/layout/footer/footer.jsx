import Container from '../../ui/container/container';
import Logo from '../../ui/logo/logo';

import Telegram from '../../../assets/img/telegram.svg';
import { TelegramLink } from '../../../utils/consts';

import styles from './style.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__wrapper}>
          <a href={TelegramLink}>
            <img className={styles.footer__icon} src={Telegram} alt="" />
          </a>
          <a href="/">
            <Logo className={styles.footer__logo} />
          </a>
          <p>
            Сайт разработан{' '}
            <a className={styles.footer__createdby} href="https://itgirlschool.com/">
              ITGirls
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
