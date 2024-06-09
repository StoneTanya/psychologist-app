import styles from './style.module.css';
import TelegramIcon from '../../../assets/img/telegram.svg';
import { TelegramLink } from '../../../utils/consts';

function Telegram() {
  return (
      <a href={TelegramLink} target="_blank" className={styles.telegram__link}>
        <img className={styles.telegram__icon} src={TelegramIcon} alt="Telegram icon" />
        @pavlyuts_pro
      </a>
  );
}

export default Telegram;
