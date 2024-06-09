import styles from './style.module.css';
import Button from '../../ui/button/button';
import { useTranslation } from 'react-i18next';

function ModalDefault({ isUnder, isOver }) {
  const { t } = useTranslation();

  return (
    <>
      <span className={styles.modal__title}>Вам есть 18 лет?</span>
      <p>{t('modalCheck.default.description')}</p>
      <Button className={styles.button__yes} handler={() => isOver()}>
        {t('modalCheck.default.yes')}
      </Button>
      <Button className={styles.button__no} handler={() => isUnder()}>
        {t('modalCheck.default.no')}
      </Button>
      <span className={styles.cookie_notification}>{t('modalCheck.default.cookie')}</span>
    </>
  );
}
export default ModalDefault;
