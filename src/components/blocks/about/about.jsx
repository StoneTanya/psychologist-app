import styles from './style.module.css';
import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleSize, TitleLevel } from '../../../utils/consts';

function About() {
  return (
    <section>
      <Container>
        <Title level={TitleLevel.H2}>ОБО МНЕ</Title>
        <Title level={TitleLevel.H3} size={TitleSize.SMALL}>МЕНЯ ЗОВУТ ЯНА ПАВЛЮЦ</Title>
        <p className={styles.about__text}>
          Я психолог-консультант в сексологии. Выпускница Международной академии сексологии по
          программам общей сексологии, женской сексологии и мужской сексологии.
        </p>
        <p className={styles.about__text}>Состою в Ассоциации сексологов.</p>
      </Container>
    </section>
  );
}

export default About;
