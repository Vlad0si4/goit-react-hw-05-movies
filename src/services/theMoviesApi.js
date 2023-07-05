import axios from 'axios';

const API_KEY = 'b835ccbb8a8b09ab0466ae71d8e40b88';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const resp = await axios.get(`${BASE_URL}/trending/all/day`, {
    params: {
      api_key: API_KEY,
    },
  });
  return resp.data.results;
};

export const fetchDetailMoviesInform = async id => {
  const resp = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return resp.data;
};

export const fetchMoviesCast = async id => {
  const resp = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return resp.data.cast;
};

export const fetchMoviesReview = async id => {
  const resp = await axios.get(`${BASE_URL}/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return resp.data.results;
};

export const fetchMoviesSearch = async query => {
  const resp = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
    },
  });
  return resp.data.results;
};
