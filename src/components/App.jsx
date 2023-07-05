import { Navigate, Route, Routes } from 'react-router-dom';

// import MoviesItem from 'pages/Movies/MoviesSearch/MoviesItem';
import Layout from './Layout/Layout';
import HomePage from 'pages/Home/HomePage';
import MoviesDetails from 'components/MoviesDetails/MoviesDetails';
import MoviesCast from 'components/MoviesCasts/MoviesCast';
import MoviesReviews from 'components/MoviesReviews/MoviesReviews';
import MoviesSearch from 'pages/Movies/MoviesSearch/MoviesSearch';
import MoviesDescription from 'components/MoviesDescription/MoviesDescription';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/:id" element={<MoviesDetails />}>
            <Route path="cast" element={<MoviesCast />} />
            <Route path="review" element={<MoviesReviews />} />
          </Route>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesSearch />} />
          <Route path="movies/:id" element={<MoviesDescription />}>
            <Route path="cast" element={<MoviesCast />} />
            <Route path="review" element={<MoviesReviews />} />
          </Route>
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </>
  );
};

<Layout>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/movies" element={<MoviesSearch />} />
    <Route path="/movies/:id" element={<MoviesDetails />}>
      <Route path="cast" element={<MoviesCast />} />
      <Route path="review" element={<MoviesReviews />} />
    </Route>
    <Route path="*" element={<h1>Page is not found</h1>} />
  </Routes>
</Layout>;
