import Header from '../header/header';
import MainPage from '../../pages/main-page/main-page';
import Footer from '../footer/footer';
// import styles from './style.module.css';

function PageWrapper() {
  return (
    <>
      <Header />
      <main>
        <MainPage />
      </main>
      <Footer />
    </>
  );
}
export default PageWrapper;
