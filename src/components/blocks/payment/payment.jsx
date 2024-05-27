import Button from '../../ui/button/button';
import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleLevel, TelegramLink } from '../../../utils/consts';
import { Element } from 'react-scroll';
import styles from './style.module.css';

function Payment() {
  return (
    <Element name="Оплата" className={styles.payment}>
      <Container>
        <Title level={TitleLevel.H2}>Стоимость и оплата</Title>
        <Button link={TelegramLink} className={styles.payment__button}>
          Записаться на консультацию
        </Button>
      </Container>
    </Element>
  );
}
export default Payment;
