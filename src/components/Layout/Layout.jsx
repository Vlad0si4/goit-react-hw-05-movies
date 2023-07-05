import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledLink, Wrapper } from './Layout.style';
import { Suspense } from 'react';
import { Loader } from 'components/loader/Loader';

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Wrapper>
          <header>
            <StyledHeader>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/movies">Movies</StyledLink>
            </StyledHeader>
          </header>
        </Wrapper>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
