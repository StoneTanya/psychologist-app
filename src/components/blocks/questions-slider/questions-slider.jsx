import questionsList from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Container from '../../ui/container/container';
import Title from '../../ui/title/title';
import { TitleLevel, TitleSize } from '../../../utils/consts';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './style.module.css';
import './style.css';

function QuestionsSlider() {
  const pagination = {
    clickable: true,
  };

  return (
    <section className={styles.questions}>
      <Container>
        <Title size={TitleSize.SMALL} level={TitleLevel.H2} className={styles.title}>
          Ваши вопросы
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
            {questionsList().map((question, index) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  <b>Вопрос:</b>

                  <p>{question.question}</p>

                  <b>Ответ:</b>

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
    </section>
  );
}

export default QuestionsSlider;
