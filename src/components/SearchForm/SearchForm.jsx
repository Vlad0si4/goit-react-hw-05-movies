import {
  Btn,
  Form,
  Input,
} from 'pages/Movies/MoviesSearch/MoviesSearch.styled';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (value === '') {
      return toast.info(
        'Sorry, but the search field cannot be empty, please enter your query'
      );
    }
    onSubmit(value);
    setValue('');
  };
  return (
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
  );
};

export default SearchForm;
