import Nav from '../nav/nav';
import Logo from '../../ui/logo/logo';
import Title from '../../ui/title/title';
import styles from './style.module.css';
import headerPhoto from '../../../assets/img/header-photo.png';
import { TitleSize, TitleLevel } from '../../ui/title/util';

function Header() {
  const classes = styles.header + ' ' + 'content';
  return (
    <header className={classes}>
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
    </header>
  );
}
export default Header;
