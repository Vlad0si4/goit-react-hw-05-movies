import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 40px 40px;
  width: 400px;
`;

export const StyledImages = styled.img`
  width: 300px;
  border-radius: 10px;
`;

export const StyledTitle = styled.h1``;

export const StyledDisruption = styled.div`
  display: flex;
`;

export const StyledItem = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const StyledBtn = styled.button`
  display: flex;
  margin-top: 20px;
  padding-left: auto;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;

export const StyledLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  text-decoration: none;

  margin-bottom: 40px;

  border: 1px solid black;
  width: 80px;
  height: 30px;
`;

export const StyledLinkItem = styled(Link)`
  text-decoration: none;
`;
