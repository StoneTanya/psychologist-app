import Button from '../../ui/button/button';
import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleLevel, FormLink } from '../../../utils/consts';
import userFormPhoto from '../../../assets/img/userForm-photo.png';
import styles from './style.module.css';

function UserForm() {
  return (
    <section>
      <Container>
        <div className={styles.form__wrapper}>
          <div className={styles.form__content}>
            <Title level={TitleLevel.H2}>Вопрос-ответ</Title>

            <p>
              Здесь вы можете задать свой вопрос.
              <br /> Форма анонимная, но для ответа вам нужно будет указать почту, на которую вы
              ожидаете ответ.
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
            <img src={userFormPhoto} alt="Фотография психолога Яны Павлюц" />
          </div>
        </div>
      </Container>
    </section>
  );
}
export default UserForm;
