import Container from '../../ui/container/container';
import Telegram from '../../../assets/img/telegram.svg';
import { TelegramLink } from '../../../utils/consts';

import styles from './style.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__wrapper}>
          <a href={TelegramLink} target='blank' className={styles.footer__link}>
            <img className={styles.footer__icon} src={Telegram} alt="" />
            <p>@pavlyuts_pro</p>
          </a>

          <p className={styles.footer__copyright}>
            <span>&copy; </span> Created by{' '}
            <a className={styles.footer__createdby} target='blank' href="https://itgirlschool.com/">
              ITGirls,
            </a>{' '}
            <span>2024 </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
