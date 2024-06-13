import Button from '../../ui/button/button';
import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleLevel, FormLink } from '../../../utils/consts';
import userFormPhoto from '../../../assets/img/userForm-photo.png';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import styles from './style.module.css';

function UserForm() {
  const { t } = useTranslation();

  return (
    <Element name="Q&A">
      <section className={styles.questions__form}>
        <Container className={styles.container}>
          <div className={styles.form__section}>
            <div className={styles.form__content}>
              <Title level={TitleLevel.H2}>{t('userForm.title')}</Title>
              <p>{t('userForm.text1')}</p>
              <p> {t('userForm.text2')}</p>
              <p>{t('userForm.text3')}</p>
              <Button link={FormLink} className={styles.form__link}>
                {t('userForm.button')}
              </Button>
            </div>
            <div className={styles.form__img}>
              <img src={userFormPhoto} alt={t('userForm.alt')} loading="lazy" />
            </div>
          </div>
        </Container>
      </section>
    </Element>
  );
}
export default UserForm;
