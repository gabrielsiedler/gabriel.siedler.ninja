import styled from 'styled-components';

export const MenuContainer = styled.div`
  bottom: 0;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  width: 100%;

  @media (min-width: 900px) {
    position: fixed;
    max-width: 30%;
    margin: 0 auto 20px;
    left: 25%;
    transform: translateX(-50%);
  }
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
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);

  ${({ isActive }) => isActive && `
    border-bottom: 2px solid white;
  `}

  &:hover {
    border-bottom: 2px solid white;
    transition: border 0.5s;
  }
`;
