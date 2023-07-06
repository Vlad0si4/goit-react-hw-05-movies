import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/theMoviesApi';
import PropTypes from 'prop-types';
import MoviesItem from 'components/MoviesItem/MoviesItem';

const Categories = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    try {
      fetchTrendingMovies().then(res => setTrendMovies(res));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <MoviesItem arr={trendMovies} />;
};

export default Categories;

Categories.propTypes = {
  trendMovies: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.isRequired,
    poster_path: PropTypes.isRequired,
  }),
};
