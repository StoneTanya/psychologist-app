// import styles from './style.module.css';
import Title from '../../ui/title/title';
import { TitleSize, TitleLevel } from '../../ui/title/util';

function About() {
  return (
    <section className="content">
      <Title level={TitleLevel.H2}>Здравствуй, меня зовут Яна Павлюц </Title>
      <Title size={TitleSize.SMALL} level={TitleLevel.H2}>
        ОБО МНЕ
      </Title>
      <p className="about__text">
        Я психолог-консультант в сексологии. Выпускница Международной академии сексологии по
        программам общей сексологии, женской сексологии и мужской сексологии.
      </p>
      <p className="about__text">Состою в Ассоциации сексологов.</p>
    </section>
  );
}

export default About;
