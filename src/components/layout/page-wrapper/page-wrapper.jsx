import Header from '../header/header';
import MainPage from '../../pages/main-page/main-page';
import styles from './style.module.css';

function PageWrapper() {
  return (
    <>
    <div className='container'>
      <Header />
      <MainPage />
      </div>
    </>
  );
}
export default PageWrapper;
