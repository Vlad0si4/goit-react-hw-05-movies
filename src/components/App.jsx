import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const MoviesCast = lazy(() => import('../components/MoviesCasts/MoviesCast'));
const MoviesReviews = lazy(() =>
  import('../components/MoviesReviews/MoviesReviews')
);
const MoviesDescription = lazy(() =>
  import('../components/MoviesDescription/MoviesDescription')
);
const MoviesSearch = lazy(() =>
  import('../pages/Movies/MoviesSearch/MoviesSearch')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesSearch />} />
        <Route path="movies/:id" element={<MoviesDescription />}>
          <Route path="cast" element={<MoviesCast />} />
          <Route path="review" element={<MoviesReviews />} />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};
