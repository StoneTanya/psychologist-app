import Carousel from '../../ui/carousel/carousel';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
  const { i18n } = useTranslation();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const questionsList = t('questions:questions', { returnObjects: true });

    axios
      .get('https://pavlyuts.pythonanywhere.com/questions/', {
        params: { language: i18n.language },
      })
      .then((response) =>
        setQuestions([
          ...questionsList,
          ...response.data.map((question) => {
            return {
              question: question['question_text'],
              answers: [question['answer_text']],
            };
          }),
        ])
      );
  }, [t, i18n.language]);

  return (
    <Carousel title={t('questions.title')} items={questions}>
      <QuestionSliderContent />
    </Carousel>
  );
}

export default QuestionSlider;
