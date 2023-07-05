import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledLink, Wrapper } from './Layout.style';

const Layout = () => {
  return (
    <>
      <Wrapper>
        <header>
          <StyledHeader>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </StyledHeader>
        </header>
      </Wrapper>
      <Outlet />
    </>
  );
};

export default Layout;
