import React, { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from 'services/theMoviesApi';
import MoviesItem from '../../../components/MoviesItem/MoviesItem';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';
import SearchForm from 'components/SearchForm/SearchForm';

const MoviesSearch = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMoviesSearch(query)
      .then(res => {
        if (!res.length) {
          toast.warning('This not a movies');
        }
        setData(res);
      })
      .catch(error => console.log(error));
  }, [query]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {data && <MoviesItem arr={data} />}

      <Outlet />
    </>
  );
};

export default MoviesSearch;

MoviesSearch.propTypes = {
  reviews: PropTypes.shape({
    value: PropTypes.string.isRequired,
    data: PropTypes.arrayOf({
      query: PropTypes.string.isRequired,
    }),
  }),
};
