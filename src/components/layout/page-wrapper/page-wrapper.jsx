import Header from '../header/header';
import Footer from '../footer/footer';
import MainPage from '../../pages/main-page/main-page';
// import styles from './style.module.css';

function PageWrapper() {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}
export default PageWrapper;
