import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Container from '../../ui/container/container';
import Title from '../../ui/title/title';
import { TitleLevel, TitleSize } from '../../../utils/consts';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './style.module.css';
import './style.css';

function QuestionsSlider() {
  const pagination = {
    clickable: true,
  };

  const { t } = useTranslation(['translation', 'questions']);
  const questionsList = t('questions:questions', { returnObjects: true });

  return (
    <Element name="Вопрос-ответ" className={styles.questions}>
      <Container>
        <Title size={TitleSize.SMALL} level={TitleLevel.H2} className={styles.title}>
          {t('questions.title')}
        </Title>

        <div className={styles.wrapper}>
          <Swiper
            spaceBetween={25}
            slidesPerView={1}
            navigation={true}
            pagination={pagination}
            modules={[Pagination, Navigation]}
            className={styles.swiper}
            breakpoints={{ 900: { slidesPerView: 2 } }}
          >
            {questionsList.map((question, index) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  <b>{t('questions.question')}</b>

                  <p>{question.question}</p>

                  <b>{t('questions.answer')}</b>

                  <div>
                    {question.answers.map((answer, index) => (
                      <p key={index}>{answer}</p>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Element>
  );
}

export default QuestionsSlider;
