import Button from '../../ui/button/button';
import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleLevel, TelegramLink } from '../../../utils/consts';
import { Element } from 'react-scroll';
import styles from './style.module.css';
import paymentOnline from '../../../assets/img/payment-online.svg';
import paymentIndividual from '../../../assets/img/payment-individual.svg';
import paymentTime from '../../../assets/img/payment-time.svg';

function Payment() {
  return (
    <Element name="Оплата" className={styles.payment}>
      <Container>
        <Title level={TitleLevel.H2}>Стоимость и оплата</Title>
        <div className={styles.payment__wrapper}>
          <div className={styles.payment__left}>
            <div className={styles.payment__prices}>
              <p>
                <span className={styles.payment__price}>3 500 RSD</span> (онлайн Райффайзен банк /
                оффлайн наличными)
              </p>
              <p>
                <span className={styles.payment__price}>3 000 рублей</span> (онлайн Тинькофф /
                Cбербанк)
              </p>
              <p>
                <span className={styles.payment__price}>30 euro</span> (на карту Revolut)
              </p>
            </div>
          </div>
          <div className={styles.payment__right}>
            <div className={styles.payment__ditails}>
              <img className={styles.payment__img} src={paymentOnline} alt="Онлайн всреча" />
              <p>ОНЛАЙН (ZOOM)</p>
            </div>
            <div className={styles.payment__ditails}>
              <img
                className={styles.payment__img}
                src={paymentIndividual}
                alt="Индивидуальная сессия"
              />
              <p>ИНДИВИДУАЛЬНАЯ СЕССИЯ</p>
            </div>
            <div className={styles.payment__ditails}>
              <img className={styles.payment__img} src={paymentTime} alt="Длительность встречи" />
              <p>60 МИНУТ</p>
            </div>
          </div>
        </div>
        <Button link={TelegramLink} className={styles.payment__button}>
          Записаться на консультацию
        </Button>
      </Container>
    </Element>
  );
}
export default Payment;
