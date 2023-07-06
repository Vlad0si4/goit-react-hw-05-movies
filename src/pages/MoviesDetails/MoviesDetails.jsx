import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchDetailMoviesInform } from 'services/theMoviesApi';
import {
  StyledImages,
  StyledItem,
  StyledLink,
  StyledLinkItem,
  StyledTitle,
  Wrapper,
} from './MoviesDetails.styled';
import PropTypes from 'prop-types';

const MoviesDetails = () => {
  const { id } = useParams();
  const [inform, setInform] = useState(null);
  const location = useLocation();

  useEffect(() => {
    try {
      fetchDetailMoviesInform(id).then(res => setInform(res));
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  if (!inform) {
    return;
  }
  const { poster_path, title, vote_average, overview, genres } = inform;

  return (
    <>
      <Wrapper>
        <StyledLink>
          <StyledLinkItem to={location?.state?.from || '/'}>
            Go back
          </StyledLinkItem>
        </StyledLink>
        <StyledImages
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w200/${poster_path}`
              : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
          }
          alt={title}
        />
        <StyledTitle>{title}</StyledTitle>
        <p>User score: {vote_average}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <StyledItem>
          {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </StyledItem>
        <NavLink to="cast">Cast</NavLink>
        <br />
        <NavLink to="review">Review</NavLink>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default MoviesDetails;

MoviesDetails.propTypes = {
  inform: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    profile_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.string.isRequired,
  }),
};
