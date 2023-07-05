import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from 'services/theMoviesApi';
import { StyledImages, StyledItem, Title, Wrapper } from './MoviesCast.styled';
import PropTypes from 'prop-types';

const MoviesCast = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    try {
      fetchMoviesCast(id).then(res => setCasts(res));
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <Wrapper>
      <StyledItem>
        {casts &&
          casts.map(item => (
            <li key={item.id}>
              <StyledImages
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${item.profile_path}`
                    : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
                }
                alt={item.title}
              />
              <h3>{item.name}</h3>
              <Title>Character: {item.character}</Title>
            </li>
          ))}
      </StyledItem>
    </Wrapper>
  );
};

export default MoviesCast;

MoviesCast.propTypes = {
  casts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.isRequired,
    profile_path: PropTypes.isRequired,
  }),
};
