import About from '../../blocks/about/about';
import Consultation from '../../blocks/consultations/consultations';
import Payment from '../../blocks/payment/payment';
import UserForm from '../../blocks/user-form/user-form';
import TestList from '../../blocks/test-list/test-list';
// import styles from './style.module.css';

function MainPage() {
  return (
    <>
      <About />
      <Consultation />
      <Payment />
      <UserForm />
      <TestList />
    </>
  );
}
export default MainPage;
