import styled from 'styled-components';

export const EnvironmentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 50px 0;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 440px) {
    width: 45%;
  }

  @media (min-width: 950px) {
    width: 30%;
  }
`;

export const Logo = styled.div`
  height: 90px;
  width: 100%;
  display: flex;

  img {
    max-width: 80px;
    max-height: 80px;
    margin: auto;
  }
`;

export const Description = styled.div`
  padding: 20px 5px 10px;
  font-weight: 300;
  line-height: 20px;
  color: #505050;
`;

export const B = styled.span`
  font-weight: normal;
  color: black;
`;
