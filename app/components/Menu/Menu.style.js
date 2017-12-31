import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 50%;
  text-align: center;
  margin-bottom: 20px;
`;

export const MenuLink = styled.a`
  color: white;
  text-transform: uppercase;
  display: inline-block;
  font-size: 14px;
  margin: 0 10px;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 3px;
  border-bottom: 2px solid transparent;
  transition: border 0.5s;

  &:hover {
    border-bottom: 2px solid white;
    transition: border 0.5s;
  }
`;
