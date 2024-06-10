import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleLevel, TitleSize } from '../../../utils/consts';
import methodPhoto from '../../../assets/img/method-photo.png';
import { useTranslation } from 'react-i18next';
import styles from './style.module.css';

export default function WorkMethod() {
  const { t } = useTranslation();

  return (
    <section>
      <Container className={styles.container}>
        <div className={styles.method__section}>
          <div className={styles.method__img}>
            <img src={methodPhoto} alt={t('workMethod.alt')} />
          </div>
          <div className={styles.method__content}>
            <p>{t('workMethod.title2')} </p>
            <p>{t('workMethod.description')}</p>
            <Title
              className={styles.method__highlight}
              level={TitleLevel.H2}
              size={TitleSize.SMALL}
            >
              {t('workMethod.title')}
            </Title>
          </div>
        </div>
      </Container>
    </section>
  );
}
