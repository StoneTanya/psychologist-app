import Carousel from '../../ui/carousel/carousel';
import { useTranslation } from 'react-i18next';

function QuestionSliderContent({ item }) {
  const { t } = useTranslation(['translation', 'questions']);

  return (
    <>
      <b>{t('questions.question')}</b>
      <p>{item.question}</p>
      <b>{t('questions.answer')}</b>
      <div>
        {item.answers.map((answer, index) => (
          <p key={index}>{answer}</p>
        ))}
      </div>
    </>
  );
}

function QuestionSlider() {
  const { t } = useTranslation(['translation', 'questions']);
  const questionsList = t('questions:questions', { returnObjects: true });

  return (
    <Carousel title={t('questions.title')} items={questionsList}>
      <QuestionSliderContent />
    </Carousel>
  );
}

export default QuestionSlider;
