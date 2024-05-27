import Button from '../../ui/button/button';
import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleLevel, FormLink } from '../../../utils/consts';
import styles from './style.module.css';

import UserFormPhoto from '../../../assets/img/userForm-photo.png';

function UserForm() {
  return (
    <section>
      <Container className={styles.container}>
        <div className={styles.form__section}>
          <div className={styles.form__content}>
            <Title level={TitleLevel.H2}>Вопрос-ответ</Title>
            <p>
              Здесь вы можете задать свой вопрос. Форма анонимная, но для ответа вам нужно будет
              указать почту, на которую вы ожидаете ответ.
            </p>
            <p>
              Некоторые ответы я могу публиковать на сайте. Вопрос остается анонимным: без контактов
              и любой другой персональной информации.
            </p>
            <Button link={FormLink} className={styles.form__link}>
              Задать вопрос
            </Button>
          </div>
          <div className={styles.form__img}>
            <img src={UserFormPhoto} alt="Фотография психолога Яны Павлюц" loading="lazy" />
          </div>
        </div>
      </Container>
    </section>
  );
}
export default UserForm;
