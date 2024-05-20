import Nav from "../nav/nav";
import Logo from "../../ui/logo/logo";
import Title from "../../ui/title/title";
import styles from "./style.module.css";
import mainPhoto from "../../../assets/img/main-photo.jpg";
import { TitleSize } from "../../ui/title/util";

function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__top"]}>
        <Logo />
        <Nav />
      </div>
      <div className={styles["header__wrapper"]}>
        <div className={styles["header__content"]}>
          <Title>Яна Павлюц</Title>
          <Title size={TitleSize.BIG}>психолог-консультант в сексологии</Title>
        </div>
        <div className={styles["header__img"]}>
          <img src={mainPhoto} alt="" />
        </div>
      </div>
    </header>
  );
}
export default Header;
