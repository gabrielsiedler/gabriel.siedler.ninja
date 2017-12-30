import styled from 'styled-components';

export const PresentationContainer = styled.div`
  flex: 1;
  display: flex;
  color: white;
  position: relative;
`;

export const FixedBackground = styled.div`
  flex: 1;
  background: ${({ image }) => `url(${image})`};
  background-attachment: fixed;
  background-position: left;
  background-size: 50%;
`;

export const Mask = styled.div`
  position: absolute;
  background-color: ${({ color }) => color};
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  position: fixed;
  left: 25%;
  top: 50%;
  transform: translate(-50%, -25%);

  h1 {
    font-size: 80px;
    line-height: 100px;
  }

  h4 {
    text-transform: uppercase;
    font-size: 16px;
  }
`;
