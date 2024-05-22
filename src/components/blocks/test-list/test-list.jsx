import testList from './data';
import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleSize } from '../../../utils/consts';
import styles from './style.module.css';

function TestList() {
  return (
    <section className={styles.tests}>
      <Container>
        <Title size={TitleSize.SMALL}>Тесты</Title>

        <p>
          Здесь можно найти ссылки на тесты, которые могут понадобиться вам во время консультаций.
          Их также можно использовать и для самостоятельной оценки. Для корректной интерпретации я
          рекомендую разобрать их со специалистом.
        </p>

        <ul className={styles.list}>
          {testList().map((test, index) => (
            <li key={index} href={test.link}>
              {test.title}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
export default TestList;
