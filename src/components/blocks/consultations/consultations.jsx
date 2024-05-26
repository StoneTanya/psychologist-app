import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleLevel } from '../../../utils/consts';
import { useTranslation } from 'react-i18next';
import styles from './style.module.css';

function Consultations() {
  const { t } = useTranslation();
  const canHelp = t('consultations.lists.canHelp', { returnObjects: true });
  const notWork = t('consultations.lists.notWork', { returnObjects: true });

  return (
    <section className={styles.consult}>
      <Container>
        <Title level={TitleLevel.H2} className={styles.title}>
          {t('consultations.title')}
        </Title>

        <div className={styles.blocks}>
          {canHelp.map((block, index) => (
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
          {t('consultations.title2')}
        </Title>

        <div className={styles.blocks}>
          {notWork.map((block, index) => (
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
    </section>
  );
}

export default Consultations;
