import Button from '../../ui/button/button';
import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleLevel, TelegramLink } from '../../../utils/consts';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import styles from './style.module.css';
import paymentOnline from '../../../assets/img/payment-online.svg';
import paymentIndividual from '../../../assets/img/payment-individual.svg';
import paymentTime from '../../../assets/img/payment-time.svg';

function Payment() {
  const { t } = useTranslation();

  return (
    <Element name="Payment" className={styles.payment}>
      <Container>
        <Title level={TitleLevel.H2}>{t('payment.title')}</Title>
        <div className={styles.payment__wrapper}>
          <div className={styles.payment__left}>
            <div className={styles.payment__prices}>
              <p>
                <span className={styles.payment__price}>{t('payment.RSDPrice')}</span>{' '}
                {t('payment.paymentMethodRSD')}
              </p>
              <p>
                <span className={styles.payment__price}>{t('payment.rubPrice')}</span>{' '}
                {t('payment.paymentMethodRUB')}{' '}
              </p>
              <p>
                <span className={styles.payment__price}>{t('payment.euroPrice')}</span>{' '}
                {t('payment.paymentMethodEURO')}
              </p>
            </div>
          </div>
          <div className={styles.payment__right}>
            <div className={styles.payment__ditails}>
              <img
                className={styles.payment__img}
                src={paymentOnline}
                alt={t('payment.altOnline')}
              />
              <p>{t('payment.online')}</p>
            </div>
            <div className={styles.payment__ditails}>
              <img
                className={styles.payment__img}
                src={paymentIndividual}
                alt={t('payment.altFormat')}
              />
              <p>{t('payment.format')}</p>
            </div>
            <div className={styles.payment__ditails}>
              <img
                className={styles.payment__img}
                src={paymentTime}
                alt={t('payment.altDuration')}
              />
              <p>{t('payment.duration')}</p>
            </div>
          </div>
        </div>
        <Button link={TelegramLink} className={styles.payment__button}>
          {t('payment.button')}
        </Button>
      </Container>
    </Element>
  );
}
export default Payment;
