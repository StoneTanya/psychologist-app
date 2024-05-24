import styles from './style.module.css';
import Button from '../../ui/button/button';

function ModalDefault({ isUnder, isOver }) {
  return (
    <>
      <span className={styles.modal__title}>Вам есть 18 лет?</span>
      <p>
        Информация на сайте не предназначена для посетителей младше 18 лет. Для доступа к ней
        подтвердите, пожалуйста, свое совершеннолетие.
      </p>
      <Button className={styles.button__yes} handler={() => isOver()}>
        Да, мне есть 18 лет
      </Button>
      <Button className={styles.button__no} handler={() => isUnder()}>
        Нет, я младше
      </Button>
      <span className={styles.cookie_notification}>
        Для вашего удобства сайт работает с файлами cookie - заходя на данный ресурс, вы
        соглашаетесь на их использование.
      </span>
    </>
  );
}
export default ModalDefault;
