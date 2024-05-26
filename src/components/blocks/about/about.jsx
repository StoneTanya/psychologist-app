import styles from './style.module.css';
import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleSize, TitleLevel } from '../../../utils/consts';
import aboutLogo from '../../../assets/img/colorsex.png';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.about__wrapper}>
          <div className={styles.about__left}>
            <Title level={TitleLevel.H2} className={styles.title}>
              {t('about.title')}
            </Title>

            <div className={styles.about__img}>
              <img src={aboutLogo} alt={t('about.imgAlt')} />
            </div>

            <p className={styles.about__text}>{t('about.asociation')}</p>
          </div>

          <div className={styles.about__right}>
            <Title level={TitleLevel.H3} size={TitleSize.SMALL} className={styles.title}>
              {t('about.title2')}
            </Title>

            <p className={styles.about__text}>{t('about.fact1')}</p>

            <p className={styles.about__text}>{t('about.fact2')}</p>

            <ul className={`${styles.about__text} ${styles.about__list}`}>
              {t('about.fact2List', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p className={styles.about__text}>{t('about.fact3')}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
