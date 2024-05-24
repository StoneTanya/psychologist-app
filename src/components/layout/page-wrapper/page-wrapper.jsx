import Header from '../header/header';
import MainPage from '../../pages/main-page/main-page';
import Footer from '../footer/footer';
import Modal from '../../blocks/modal/modal';
import styles from './style.module.css';

function PageWrapper() {
  return (
    <>
      <Modal />
      <Header />
      <main className={styles.main}>
        <MainPage />
      </main>
      <Footer />
    </>
  );
}
export default PageWrapper;
