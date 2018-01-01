import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 50px 0;
`;

export const Item = styled.a`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  display: block;
  text-decoration: none;
  transition: opacity 0.5s;

  :hover {
    opacity: 0.5;
    transition: opacity 0.5s;
  }

  @media (min-width: 440px) {
    width: 45%;
  }

  @media (min-width: 950px) {
    width: 30%;
  }
`;

export const Logo = styled.div`
  height: 120px;
  width: 100%;
  display: flex;

  img {
    max-width: 100px;
    max-height: 110px;
    margin: auto;
  }
`;
