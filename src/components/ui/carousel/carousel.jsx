import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Container from '../container/container';
import Title from '../title/title';
import { TitleLevel, TitleSize } from '../../../utils/consts';
import { Element } from 'react-scroll';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './style.module.css';
import './style.css';

function Carousel({ title, items, children }) {
  const pagination = {
    clickable: true,
  };

  return (
    <Element name="Вопрос-ответ" className={styles.questions}>
      <Container>
        <Title size={TitleSize.SMALL} level={TitleLevel.H2} className={styles.title}>
          {title}
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
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  {React.Children.map(children, (child) => React.cloneElement(child, { item }))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Element>
  );
}

export default Carousel;
