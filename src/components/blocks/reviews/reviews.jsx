import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Carousel from '../../ui/carousel/carousel';

function ReviewContent({ item }) {
  return (
    <>
      <p>{item['review_text']}</p>
      <p>{item['author_name']}</p>
      <p>{item['pub_date']}</p>
    </>
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
