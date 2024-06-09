import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleLevel, TitleSize, TelegramLink } from '../../../utils/consts';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Telegram from '../../ui/telegram/telegram';
import Button from '../../ui/button/button';
import styles from './style.module.css';

function About() {
  const { t } = useTranslation();

  return (
    <Element name="Обо мне" className={styles.about}>
      <Container>
        <Title level={TitleLevel.H2} className={styles.about__title}>
          {t('about.title')}
        </Title>
        <div className={styles.about__wrapper}>
          <div className={styles.about__contact}>
            <Telegram />
            <Button link={TelegramLink}>{t('about.button')}</Button>
          </div>
          <div className={styles.about__description}>
            <p>{t('about.fact1')}</p>
            <p>{t('about.fact2')}</p>
            <ul className={styles.about__list}>
              {t('about.fact2List', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>{t('about.fact3')}</p>
            <p>{t('about.fact4')}</p>
          </div>
        </div>
      </Container>
    </Element>
  );
}

export default About;
