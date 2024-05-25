import Intro from '../../blocks/intro/intro';
import About from '../../blocks/about/about';
import Consultation from '../../blocks/consultations/consultations';
import Payment from '../../blocks/payment/payment';
import UserForm from '../../blocks/user-form/user-form';
import TestList from '../../blocks/test-list/test-list';
import WorkMethod from '../../blocks/work-method/work-method';
import QuestionsSlider from '../../blocks/questions-slider/questions-slider';
// import styles from './style.module.css';

function MainPage() {
  return (
    <>
      <Intro />
      <About />
      <Consultation />
      <WorkMethod />
      <Payment />
      <UserForm />
      <QuestionsSlider />
      <TestList />
    </>
  );
}
export default MainPage;
