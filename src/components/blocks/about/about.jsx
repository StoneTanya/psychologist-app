import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleSize, TitleLevel } from '../../../utils/consts';
import { Element } from 'react-scroll';

import aboutLogo from '../../../assets/img/colorsex.png';
import styles from './style.module.css';

function About() {
  return (
    <Element name="Обо мне" className={styles.about}>
      <Container>
      <Title level={TitleLevel.H2}>ОБО МНЕ</Title>
        <div className={styles.about__wrapper}>
          <div className={styles.about__left}>
            <div className={styles.about__img}>
              <img src={aboutLogo} alt="Логотип Ассоциации сексологов РФ" />
            </div>
            <p className={styles.about__text}>
              Состою в Ассоциации сексологов Российской Федерации
            </p>
          </div>
          <div className={styles.about__right}>
            <Title level={TitleLevel.H3} size={TitleSize.SMALL}>
              МЕНЯ ЗОВУТ ЯНА ПАВЛЮЦ
            </Title>
            <p className={styles.about__text}>
              Консультирую мужчин и женщин по вопросам, связанным с качеством сексуальной жизни.
            </p>
            <p className={styles.about__text}>
              Выпускница Международной академии сексологии по программам:
            </p>
            <ul className={`${styles.about__text} ${styles.about__list}`}>
              <li>общая сексология,</li>
              <li>женская сексология,</li>
              <li>мужская сексология.</li>
            </ul>
            <p className={styles.about__text}>В личной терапии с 2019 года.</p>
          </div>
        </div>
      </Container>
    </Element>
  );
}

export default About;
