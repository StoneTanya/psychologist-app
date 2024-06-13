import popupImage from '../../../assets/img/popup-img/popup.svg';
import IconAge from '../../../assets/img/popup-img/age-verify.svg?react';
import LangButtons from '../lang-toggle/lang-buttons';
import styles from './style.module.css';

function ModalWrapper({ isOpen, children }) {
  return (
    <>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <IconAge className={styles.age} />
            <LangButtons className={styles.lang_buttons__box} />
            <img className={styles.modal__image} src={popupImage} alt="" />
            {children}
          </div>
        </div>
      )}
    </>
  );
}
export default ModalWrapper;
