import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/theMoviesApi';
import {
  Image,
  Item,
  StyledImage,
  StyledList,
  Title,
  Wrapper,
} from './Categories.styled';

const Categories = () => {
  const location = useLocation();
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    try {
      fetchTrendingMovies().then(res => setTrendMovies(res));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Wrapper>
      <StyledList>
        {trendMovies.map(trend => {
          return (
            <Item key={trend.id}>
              <Link to={`${trend.id}`} state={{ from: location }}>
                <StyledImage>
                  <Image
                    src={
                      trend.poster_path
                        ? `https://image.tmdb.org/t/p/w200/${trend.poster_path}`
                        : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
                    }
                    alt={trend.title}
                  />
                  <Title>
                    {trend.name} {trend.title}
                  </Title>
                </StyledImage>
              </Link>
            </Item>
          );
        })}
      </StyledList>
      <Outlet />
    </Wrapper>
  );
};

export default Categories;
