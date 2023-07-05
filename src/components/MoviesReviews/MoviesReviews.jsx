import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReview } from 'services/theMoviesApi';

const MoviesReviews = () => {
  const { id } = useParams();
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetchMoviesReview(id).then(res => setReview(res));
  }, [id]);

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li style={{ listStyle: 'none' }} key={review.id}>
            <h2>Author: {review.author}</h2>
            <p>
              <br />
              {review.content}
            </p>
          </li>
        ))}
      </ul>
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
    </div>
  );
};

export default MoviesReviews;
