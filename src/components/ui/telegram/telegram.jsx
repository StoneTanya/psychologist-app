import styles from './style.module.css';
import TelegramIcon from '../../../assets/img/telegram.svg';
import { TelegramLink } from '../../../utils/consts';

function Telegram({ className }) {
  return (
    <div className={`${styles.telegram__wrapper} ${className}`}>
      <a href={TelegramLink} target="_blank" className={styles.telegram__link}>
        <img className={styles.telegram__icon} src={TelegramIcon} alt="Telegram icon" />
        <p>@pavlyuts_pro</p>
      </a>
    </div>
  );
}

export default Telegram;
