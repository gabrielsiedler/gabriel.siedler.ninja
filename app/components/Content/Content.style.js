import styled from 'styled-components';

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
`;

export const Data = styled.div`
  overflow: hidden;
  padding: 20px 30px;

  @media (min-width: 480px) {
    padding: 40px 50px;
  }

  @media (min-width: 1150px) {
    padding: 50px 75px;
  }
`;
