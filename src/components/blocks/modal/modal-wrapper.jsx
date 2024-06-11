import popupImage from '../../../assets/img/popup-img/popup.svg';
import IconAge from '../../../assets/img/popup-img/age-verify.svg?react';
import Button from '../../ui/button/button';
import styles from './style.module.css';
import { changeLanguage } from '../../../utils/util';

function ModalWrapper({ isOpen, children }) {
  return (
    <>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <IconAge className={styles.age} />
            <div className={styles.lang_buttons__box}>
              <Button
                handler={() => changeLanguage('ru')}
                className={styles.button__lang}
                data={'active'}
              >
                RU
              </Button>
              <Button handler={() => changeLanguage('en')} className={styles.button__lang}>
                EN
              </Button>
            </div>
            <img className={styles.modal__image} src={popupImage} alt="" />
            {children}
          </div>
        </div>
      )}
    </>
  );
}
export default ModalWrapper;
