import Intro from '../../blocks/intro/intro';
import About from '../../blocks/about/about';
import Consultation from '../../blocks/consultations/consultations';
import Payment from '../../blocks/payment/payment';
import UserForm from '../../blocks/user-form/user-form';
import TestList from '../../blocks/test-list/test-list';
import QuestionSlider from '../../blocks/questions-slider/question-slider';
// import Reviews from '../../blocks/reviews/reviews';

function MainPage() {
  return (
    <>
      <Intro />
      <About />
      <Consultation />
      <Payment />
      <UserForm />
      <QuestionSlider />
      <TestList />
      {/* <Reviews /> */}
    </>
  );
}
export default MainPage;
