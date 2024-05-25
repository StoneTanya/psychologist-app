import styles from './style.module.css';
import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleSize, TitleLevel } from '../../../utils/consts';
import aboutLogo from '../../../assets/img/logo-about.png';

function About() {
  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.about__wrapper}>
          <div className={styles.about__left}>
            <Title level={TitleLevel.H2}>ОБО МНЕ</Title>
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
              <li>общая сексология</li>
              <li>женская сексология</li>
              <li>мужская сексология</li>
            </ul>
            <p className={styles.about__text}>В личной терапии с 2019 года.</p>
          </div>
        </div>
        <div className={styles.about__mobile}>
          <Title level={TitleLevel.H2}>ОБО МНЕ</Title>
          <p className={styles.about__text}>
            Выпускница Международной академии сексологии по программам общей сексологии, женской
            сексологии и мужской сексологии.
          </p>
          <p className={styles.about__text}>Состою в Ассоциации сексологов Российской Федерации</p>
        </div>
      </Container>
    </section>
  );
}

export default About;
