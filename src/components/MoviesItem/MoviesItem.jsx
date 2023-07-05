import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Image,
  Item,
  StyledImage,
  StyledList,
  Title,
  Wrapper,
} from './MoviesItem.Styled';

const MoviesItem = ({ arr }) => {
  const location = useLocation();
  return (
    <>
      <Wrapper>
        <StyledList>
          {Array.isArray(arr) &&
            arr.map(el => {
              return (
                <Item key={el.id}>
                  <Link to={`/movies/${el.id}`} state={{ from: location }}>
                    <StyledImage>
                      <Image
                        src={
                          el.poster_path
                            ? `https://image.tmdb.org/t/p/w200/${el.poster_path}`
                            : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
                        }
                        alt={el.title}
                      />
                      <Title>
                        {el.name} {el.title}
                      </Title>
                    </StyledImage>
                  </Link>
                </Item>
              );
            })}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default MoviesItem;
