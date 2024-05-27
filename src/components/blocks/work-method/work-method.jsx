import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleLevel, TitleSize } from '../../../utils/consts';
import methodPhoto from '../../../assets/img/method-photo.png';

import styles from './style.module.css';

export default function WorkMethod() {
  return (
    <section>
      <Container className={styles.container}>
        <div className={styles.method__section}>
          <div className={styles.method__img}>
            <img src={methodPhoto} alt="Фотография психолога Яны Павлюц" />
          </div>
          <div className={styles.method__content}>
            <p>Работаю в полимодальном подходе.</p>
            <p>
              Это значит, что в процессе консультации использую разные методы терапии (аналитическая
              терапия, ДПДГ, эмоционально-образная психотерапия, элементы когнитивно-поведенческой
              терапии) в зависимости от того, что лучше всего подходит для вашего запроса.
            </p>
            <Title
              className={styles.method__highlight}
              level={TitleLevel.H2}
              size={TitleSize.SMALL}
            >
              Оказываю психологическое сопровождение и терапию людям, пережившим сексуальное насилие
            </Title>
          </div>
        </div>
      </Container>
    </section>
  );
}
