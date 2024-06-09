import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import headerPhoto from '../../../assets/img/header-photo.png';
import { TitleSize, TitleLevel } from '../../../utils/consts';
import styles from './style.module.css';

function Intro() {
  return (
    <section className={styles.intro}>
      <Container>
        <div className={styles.intro__wrapper}>
          <div className={styles.intro__img}>
            <img src={headerPhoto} alt="Фотография психолога Яны Павлюц" />
          </div>
          <div className={styles.intro__content}>
            <Title level={TitleLevel.H3} size={TitleSize.SMALL} className={styles.intro__title}>
              Яна Павлюц
            </Title>
            <Title level={TitleLevel.H1} size={TitleSize.BIG}>
              психолог - консультант в сексологии
            </Title>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Intro;
