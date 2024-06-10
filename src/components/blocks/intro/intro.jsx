import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import headerPhoto from '../../../assets/img/header-photo.png';
import { TitleSize, TitleLevel } from '../../../utils/consts';
import { useTranslation } from 'react-i18next';
import styles from './style.module.css';

function Intro() {
  const { t } = useTranslation();

  return (
    <section className={styles.intro}>
      <Container>
        <div className={styles.intro__wrapper}>
          <div className={styles.intro__img}>
            <img src={headerPhoto} alt={t('intro.alt')} />
          </div>
          <div className={styles.intro__content}>
            <Title level={TitleLevel.H3} size={TitleSize.SMALL}>
              {t('intro.subtitle')}
            </Title>

            <Title level={TitleLevel.H1} size={TitleSize.BIG}>
              {t('intro.title')}
            </Title>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Intro;
