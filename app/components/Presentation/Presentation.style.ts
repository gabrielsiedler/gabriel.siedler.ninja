import styled from 'styled-components'

export const PresentationContainer = styled.div`
  display: flex;
  color: white;
  position: relative;
  min-height: 500px;

  @media (min-width: 900px) {
    flex: 1;
    height: auto;
  }
`

export const FixedBackground = styled.div`
  flex: 1;
  background: ${({ image }) => `url(${image})`};
  background-attachment: fixed;
  background-size: 100%;

  @media (min-width: 420px) {
    background-position: -5%;
  }

  @media (min-width: 900px) {
    background-position: left;
    background-size: 50%;
  }
`

export const Mask = styled.div`
  position: absolute;
  background-color: ${({ color }) => color};
  width: 100%;
  height: 100%;
`

export const Title = styled.div`
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -25%);
  font-family: Montserrat;

  @media (min-width: 900px) {
    position: fixed;
    left: 25%;
    top: 50%;
    transform: translate(-50%, -25%);
    max-width: 45%;
  }

  h1 {
    text-align: center;
    font-size: 60px;
    line-height: 60px;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.5);

    @media (min-width: 480px) {
      font-size: 65px;
      line-height: 70px;
    }

    @media (min-width: 900px) {
      font-size: 80px;
      line-height: 80px;
    }
  }

  h4 {
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    margin-top: 5px;

    @media (min-width: 480px) {
      margin-top: 7px;
    }

    @media (min-width: 900px) {
      font-size: 16px;
    }
  }
`
