import testList from './data';
import Title from '../../ui/title/title';
import Button from '../../ui/button/button';
import Container from '../../ui/container/container';
import { TitleLevel } from '../../../utils/consts';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import styles from './style.module.css';

function TestList() {
  const { t } = useTranslation();

  return (
    <Element name="Tests" className={styles.tests}>
      <Container>
        <Title level={TitleLevel.H2}>{t('tests.title')}</Title>
        <p>{t('tests.description')}</p>

        <ul className={styles.list}>
          {testList().map((test, index) => (
            <li key={index}>
              <Button link={test.link} className={styles.tests__link}>
                {test.title}
              </Button>
            </li>
          ))}
        </ul>
      </Container>
    </Element>
  );
}
export default TestList;
