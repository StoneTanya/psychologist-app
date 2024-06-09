import Container from '../../ui/container/container';
import Telegram from '../../ui/telegram/telegram';
import styles from './style.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__wrapper}>
          <Telegram />
          <p className={styles.footer__copyright}>
            <span>&copy; </span> Created by{' '}
            <a className={styles.footer__createdby} target="_blank" href="https://itgirlschool.com/">
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
