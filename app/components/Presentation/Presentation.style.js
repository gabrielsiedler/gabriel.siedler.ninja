import styled from 'styled-components';

export const PresentationContainer = styled.div`
  flex: 1;
  display: flex;
  color: white;
  position: relative;
  min-height: 800px;

  @media (min-width: 900px) {
    height: auto;
  }
`;

export const FixedBackground = styled.div`
  flex: 1;
  background: ${({ image }) => `url(${image})`};
  background-attachment: fixed;
  background-position: left;
  background-size: 100%;

  @media (min-width: 900px) {
    background-size: 50%;
  }
`;

export const Mask = styled.div`
  position: absolute;
  background-color: ${({ color }) => color};
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: Montserrat;

  @media (min-width: 900px) {
    position: fixed;
    left: 25%;
    transform: translate(-50%, -25%);
  }

  h1 {
    font-size: 65px;
    line-height: 70px;

    @media (min-width: 900px) {
      font-size: 80px;
      line-height: 100px;
    }
  }

  h4 {
    margin-left: 7px;
    text-transform: uppercase;
    font-size: 14px;

    @media (min-width: 900px) {
      font-size: 16px;
    }
  }
`;
