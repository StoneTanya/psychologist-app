import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Carousel from '../../ui/carousel/carousel';

import styles from './style.module.css';

function ReviewContent({ item }) {
  return (
    <div className={styles.review__wrapper}>
      <p className={styles.review__text}>{item['review_text']}</p>
      <div className={styles.review__info}>
        <p className={styles.review__author}>{item['author_name']}</p>
        <p className={styles.review__date}>{item['pub_date']}</p>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get('https://pavlyuts.pythonanywhere.com/reviews/')
      .then((response) => setReviews(response.data));
  }, []);

  return (
    <Carousel title="Отзывы" items={reviews}>
      <ReviewContent />
    </Carousel>
  );
}
