import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import { TitleLevel } from '../../../utils/consts';

// import styles from './style.module.css';

function Consultations() {
  return(
  <section>
      <Container>
        <Title level={TitleLevel.H2}>С какими запросами я могу помочь:</Title>
      </Container>
    </section>
    );
}

export default Consultations;
