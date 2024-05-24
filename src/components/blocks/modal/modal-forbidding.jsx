import styles from './style.module.css';
import Button from '../../ui/button/button';

function ModalForbidding({ isBack }) {
  return (
    <>
      <span className={styles.modal__title}>Буду ждать тебя позже!</span>
      <p>Сайт содержит информацию, предназначенную только для лиц старше 18 лет. </p>
      <Button className={styles.button__back} handler={() => isBack()}>
        Назад
      </Button>
    </>
  );
}
export default ModalForbidding;
