import { useContext } from 'react';
import { LangContext } from '../../app/App';
import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import Button from '../../ui/button/button';
import headerPhoto from '../../../assets/img/header-photo.png';
import { TitleSize, TitleLevel, TelegramLink } from '../../../utils/consts';
import styles from './style.module.css';

const translation = {
  fullName: {
    ru: 'Яна Павлюц',
    en: 'Yana Pavlyuts',
  },
  title: {
    ru: 'психолог-консультант в сексологии',
    en: 'psychologist-consultant in sexology',
  },
  contact: {
    ru: 'Записаться',
    en: 'Contact me',
  },
};

function Intro() {
  const { lang } = useContext(LangContext);

  return (
    <section className="wrapper">
      <Container>
        <div className={styles.intro__wrapper}>
          <div className={styles.intro__img}>
            <img src={headerPhoto} alt="Фотография психолога Яны Павлюц" />
          </div>
          <div className={styles.intro__content}>
            <Title level={TitleLevel.H3} size={TitleSize.SMALL}>
              {translation.fullName[lang]}
            </Title>
            <Title level={TitleLevel.H1} size={TitleSize.BIG}>
              {translation.title[lang]}
            </Title>
            <Button link={TelegramLink}>{translation.contact[lang]}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Intro;
