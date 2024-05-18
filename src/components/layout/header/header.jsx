import Nav from "../nav/nav";
import Logo from "../../ui/logo/logo";
import Title from "../../ui/title/title";
import styles from "./style.module.css";
import mainPhoto from "../../../assets/img/main-photo.jpg";

function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__top"]}>
        <Logo />
        <Nav />
      </div>
      <div className={styles["header__wrapper"]}>
        <div className={styles["header__content"]}>
          <Title text={"Меня зовут Яна Павлюц"} />
          <h2>
            я психолог-консультант
            <br />в сексологии
          </h2>
        </div>
        <div className={styles["header__img"]}>
          <img src={mainPhoto} alt="" />
        </div>
      </div>
    </header>
  );
}
export default Header;
