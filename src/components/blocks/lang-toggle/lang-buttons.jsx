import Button from '../../ui/button/button';
import styles from './style.module.css';
import i18n from '../../../i18n';

function LangButtons({ className = '' }) {
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={className}>
      <Button handler={() => changeLanguage('ru')} className={styles.button__lang}>
        RU
      </Button>
      <Button handler={() => changeLanguage('en')} className={styles.button__lang}>
        EN
      </Button>
    </div>
  );
}

export default LangButtons;
