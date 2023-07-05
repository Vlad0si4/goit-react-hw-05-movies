import React, { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from 'services/theMoviesApi';
import MoviesItem from '../../../components/MoviesItem/MoviesItem';
import { toast } from 'react-toastify';
import { Btn, Form, Input } from './MoviesSearch.styled';

const MoviesSearch = () => {
  const [value, setValue] = useState('');
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

  const handleSubmit = event => {
    event.preventDefault();

    if (value === '') {
      return toast.info(
        'Sorry, but the search field cannot be empty, please enter your query'
      );
    }

    setSearchParams(value ? { query: value } : {});
    setValue('');
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
        ></Input>
        <Btn>Search</Btn>
      </Form>

      {data && <MoviesItem arr={data} />}

      <Outlet />
    </>
  );
};

export default MoviesSearch;
