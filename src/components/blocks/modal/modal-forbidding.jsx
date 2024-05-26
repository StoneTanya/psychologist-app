import styles from './style.module.css';
import Button from '../../ui/button/button';
import { useTranslation } from 'react-i18next';

function ModalForbidding({ isBack }) {
  const { t } = useTranslation();

  return (
    <>
      <span className={styles.modal__title}>{t('modalCheck.forbidden.title')}</span>
      <p>{t('modalCheck.forbidden.description')}</p>
      <Button className={styles.button__back} handler={() => isBack()}>
        {t('modalCheck.forbidden.back')}
      </Button>
    </>
  );
}
export default ModalForbidding;
