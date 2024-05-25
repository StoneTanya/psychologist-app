import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import Button from '../../ui/button/button';
import headerPhoto from '../../../assets/img/header-photo.png';
import { TitleSize, TitleLevel, TelegramLink } from '../../../utils/consts';
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
            <Title level={TitleLevel.H3} size={TitleSize.SMALL}>
              Яна Павлюц
            </Title>
            <Title level={TitleLevel.H1} size={TitleSize.BIG}>
              психолог - консультант в сексологии
            </Title>
            <Button link={TelegramLink}>Записаться</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Intro;
