import Button from '../../ui/button/button';
import styles from './style.module.css';
import { useTranslation } from 'react-i18next';

function LangButtons({ className = '' }) {
  const { i18n } = useTranslation();

  return (
    <div className={className}>
      {i18n.options.locales.toReversed().map((locale) => (
        <Button
          key={locale}
          handler={() => i18n.changeLanguage(locale)}
          className={`${styles.button__lang} ${i18n.language === locale ? styles.button__active : ''}`}
        >
          {locale}
        </Button>
      ))}
    </div>
  );
}

export default LangButtons;
