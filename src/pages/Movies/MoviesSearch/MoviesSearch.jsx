import React, { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from 'services/theMoviesApi';
import MoviesItem from '../../../components/MoviesItem/MoviesItem';
import { toast } from 'react-toastify';
import { Btn, Form, Input } from './MoviesSearch.styled';

const MoviesSearch = () => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    try {
      // const query = searchParams.get('query') ?? '';
      fetchMoviesSearch(query).then(res => setValue(res));

      if (!query) {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchParams]);

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
          value={value.target}
          onChange={e => {
            setValue(e.target.value);
          }}
        ></Input>
        <Btn>Search</Btn>
      </Form>

      {value && <MoviesItem arr={value} />}

      <Outlet />
    </>
  );
};

export default MoviesSearch;
