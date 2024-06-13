import Button from '../../ui/button/button';
import styles from './style.module.css';
import i18n from '../../../i18n';
import { useState } from 'react';

function LangButtons({ className = '' }) {
  const [isActiveButtonRU, setIsActiveButtonRU] = useState(true);
  const [isActiveButtonEN, setIsActiveButtonEN] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const selectRUButton = () => {
    setIsActiveButtonRU(!isActiveButtonRU);
    setIsActiveButtonEN(!isActiveButtonEN);
  };

  const selectENButton = () => {
    setIsActiveButtonEN(!isActiveButtonEN);
    setIsActiveButtonRU(!isActiveButtonRU);
  };

  const handleClickRU = () => {
    selectRUButton();
    changeLanguage('ru');
  };

  const handleClickEN = () => {
    selectENButton();
    changeLanguage('en');
  };

  return (
    <div className={className}>
      <Button
        handler={() => handleClickRU()}
        className={`${styles.button__lang} ${isActiveButtonRU ? styles.button__active : ''}`}
      >
        RU
      </Button>
      <Button
        handler={() => handleClickEN()}
        className={`${styles.button__lang} ${isActiveButtonEN ? styles.button__active : ''}`}
      >
        EN
      </Button>
    </div>
  );
}

export default LangButtons;
