// import styles from './style.module.css';
import Title from "../../ui/title/title";
import { TitleSize } from "../../ui/title/util";

function About() {
  return (
      <section>
        <Title>Здравствуй, меня зовут Яна Павлюц </Title>
        <Title size={TitleSize.SMALL}>ОБО МНЕ</Title>
        <p className="about__text">
          Я психолог-консультант в сексологии. Выпускница Международной академии сексологии по программам общей сексологии, женской сексологии и мужской сексологии.
        </p>
        <p className="about__text">
          Состою в Ассоциации сексологов.
        </p>
      </section>
  );
}

export default About;
