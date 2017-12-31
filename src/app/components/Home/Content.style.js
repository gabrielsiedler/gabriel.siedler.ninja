import styled from 'styled-components';

export const ContentContainer = styled.div`
  p {
    line-height: 24px;
    margin-bottom: 15px;
  }
`;

export const H2 = styled.h2`
  font-size: 50px;
  line-height: 50px;
  margin: 50px 0 20px;
  font-family: Montserrat;
  letter-spacing: 0.5px;
  color: #48626D;
`;

export const H3 = styled.h3`
  font-size: 35px;
  line-height: 40px;
  margin: 50px 0 20px;
  font-family: Montserrat;
  letter-spacing: 0;
  text-transform: uppercase;
  color: #999;
  text-align: center;
`;

export const B = styled.span`
  font-weight: bold;
`;

export const A = styled.a`
  color: #48626D;
  text-decoration: none;
  transition: color 0.2s;

  :hover {
    color: black;
    transition: color 0.2s;
  }
`;
