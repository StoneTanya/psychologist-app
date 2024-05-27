import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleLevel } from '../../../utils/consts';
import { Element } from 'react-scroll';
import dataList from './data';

import styles from './style.module.css';

function Consultations() {
  const lists = dataList();

  return (
    <Element name="Консультации" className={styles.consult}>
      <Container>
        <Title level={TitleLevel.H2} className={styles.title}>
          С какими запросами я могу помочь:
        </Title>

        <div className={styles.blocks}>
          {lists.canHelp.map((block, index) => (
            <div key={index} className={`${styles.block} ${styles.block_fill}`}>
              {block.map((item, id) => (
                <li key={id} className={styles.item}>
                  {item}
                </li>
              ))}
            </div>
          ))}
        </div>

        <Title level={TitleLevel.H3} className={styles.subtitle}>
          С какими запросами не работаю:
        </Title>

        <div className={styles.blocks}>
          {lists.notWork.map((block, index) => (
            <div key={index} className={`${styles.block} ${styles.block_outlined}`}>
              {block.map((item, id) => (
                <li key={id} className={styles.item}>
                  {item}
                </li>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </Element>
  );
}

export default Consultations;
