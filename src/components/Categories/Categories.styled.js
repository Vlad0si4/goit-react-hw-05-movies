import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

export const Wrapper = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  width: 100px;
  height: auto;
  border-radius: 10px;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.6);
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10px;

  max-width: 150px;
`;

export const StyledImage = styled.div`
  width: 200px;
`;
