import React from 'react';
import { useParams } from 'react-router-dom';
import MoviesDetails from '../MoviesDetails/MoviesDetails';

const MoviesDescription = () => {
  const { id } = useParams();

  return <>{MoviesDetails(id)}</>;
};

export default MoviesDescription;
