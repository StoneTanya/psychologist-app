import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleLevel, TelegramLink } from '../../../utils/consts';
import { Element } from 'react-scroll';
import Telegram from '../../ui/telegram/telegram';
import Button from '../../ui/button/button';

import styles from './style.module.css';

function About() {
  return (
    <Element name="Обо мне" className={styles.about}>
      <Container>
        <Title level={TitleLevel.H2} className={styles.about__title}>
          Обо мне
        </Title>
        <div className={styles.about__wrapper}>
          <div className={styles.about__contact}>
            <Telegram className={styles.about__telegram} />
            <Button link={TelegramLink}>Записаться</Button>
          </div>
          <div className={styles.about__description}>
            <p className={styles.about__text}>
              Меня зовут Яна Павлюц и я помогаю мужчинам и женщинам наладить свою сексуальную жизнь.
              Работаю в полимодальном подходе — это метод, когда используется комбинированные знания
              разных школ психологии.
            </p>
            <p className={styles.about__text}>
              Проходила обучение в Международной академии сексологии по программам:
            </p>
            <ul className={styles.about__list}>
              <li>общая сексология,</li>
              <li>женская сексология,</li>
              <li>мужская сексология.</li>
            </ul>
            <p className={styles.about__text}>
              Состою в Ассоциации сексологов Российской Федерации с 2019 года.
            </p>
            <p className={styles.about__text}>В личной терапии 5 лет.</p>
          </div>
        </div>
      </Container>
    </Element>
  );
}

export default About;
