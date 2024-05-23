import Button from '../../ui/button/button';
import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleLevel, FormLink } from '../../../utils/consts';
import styles from './style.module.css';

function UserForm() {
  return (
    <section>
      <Container>
        <Title level={TitleLevel.H2}>Вопрос-ответ</Title>
        <Button link={FormLink} className={styles.form__link}>
          Задать вопрос
        </Button>
      </Container>
    </section>
  );
}
export default UserForm;
