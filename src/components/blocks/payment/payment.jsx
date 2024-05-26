import Button from '../../ui/button/button';
import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleLevel, TelegramLink } from '../../../utils/consts';
import { useTranslation } from 'react-i18next';
import styles from './style.module.css';

function Payment() {
  const { t } = useTranslation();

  return (
    <section className={styles.payment}>
      <Container>
        <Title level={TitleLevel.H2}>{t('payment.title')}</Title>
        <Button link={TelegramLink} className={styles.payment__button}>
          {t('payment.button')}
        </Button>
      </Container>
    </section>
  );
}
export default Payment;
