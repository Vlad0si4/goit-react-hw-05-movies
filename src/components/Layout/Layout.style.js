import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: rgb(63 72 181 / 65%);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledHeader = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  width: 80px;
  height: 40px;

  font-size: 20px;

  border: 1px solid black;
  border-radius: 10px;
  text-decoration: none;

  &.active {
    background-color: #7700ff33;
    color: white;
  }

  &:hover:not(.active) {
    background-color: #7700ff33;
  }
`;
