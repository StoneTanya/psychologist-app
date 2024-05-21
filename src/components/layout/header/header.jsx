import Nav from '../nav/nav';
import Logo from '../../ui/logo/logo';
import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import Content from '../../ui/content/content';
import styles from './style.module.css';
import headerPhoto from '../../../assets/img/header-photo.png';
import { TitleSize } from '../../../utils/consts';

function Header() {
  return (
    <header className={styles['header']}>
      <Container>
        <Content>
          <div className={styles['header__top']}>
            <Logo />
            <Nav />
          </div>
          <div className={styles['header__wrapper-hidden']}>
            <div className={styles['header__content']}>
              <Title>Яна Павлюц</Title>
              <Title size={TitleSize.BIG}>психолог-консультант в сексологии</Title>
            </div>
            <div className={styles['header__img']}>
              <img src={headerPhoto} alt="" />
            </div>
          </div>
        </Content>
      </Container>
    </header>
  );
}
export default Header;
