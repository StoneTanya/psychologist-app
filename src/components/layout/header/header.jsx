import Nav from '../nav/nav';
import Logo from '../../ui/logo/logo';
import Title from '../../ui/title/title';
import Container from '../../ui/container/container';
import styles from './style.module.css';
import headerPhoto from '../../../assets/img/header-photo.png';
import { TitleSize, TitleLevel } from '../../../utils/consts';

function Header() {
  return (
    <header className="wrapper">
      <Container>
        <div className={styles['header__top']}>
          <Logo />
          <Nav />
        </div>
        <div className={styles['header__wrapper']}>
          <div className={styles['header__content']}>
            <Title level={TitleLevel.H3}>Яна Павлюц</Title>
            <Title level={TitleLevel.H1} size={TitleSize.BIG}>
              психолог-консультант в сексологии
            </Title>
          </div>
          <div className={styles['header__img']}>
            <img src={headerPhoto} alt="" />
          </div>
        </div>
      </Container>
    </header>
  );
}
export default Header;
