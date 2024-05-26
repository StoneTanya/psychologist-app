import Button from '../../ui/button/button';
import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleLevel, FormLink } from '../../../utils/consts';
import userFormPhoto from '../../../assets/img/userForm-photo.png';
import { useTranslation } from 'react-i18next';

import styles from './style.module.css';

function UserForm() {
  const { t } = useTranslation();

  return (
    <section>
      <Container>
        <div className={styles.form__wrapper}>
          <div className={styles.form__content}>
            <Title level={TitleLevel.H2}>{t('userForm.title')}</Title>

            <p>
              {t('userForm.text1')}
              <br /> {t('userForm.text2')}
            </p>
            <p>{t('userForm.text3')}</p>

            <Button link={FormLink} className={styles.form__link}>
              {t('userForm.button')}
            </Button>
          </div>
          <div className={styles.form__img}>
            <img src={userFormPhoto} alt={t('userForm.alt')} />
          </div>
        </div>
      </Container>
    </section>
  );
}
export default UserForm;
