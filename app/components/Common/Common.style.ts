import styled from 'styled-components'

export const A = styled.a`
  color: #51a1c3;
  text-decoration: none;
  transition: color 0.2s;
  font-weight: normal;

  :hover {
    color: black;
    transition: color 0.2s;
  }
`

export const P = styled.p`
  font-weight: 300;
  font-size: 17px;
  line-height: 24px;
  margin-bottom: 15px;
  letter-spacing: 0.6px;

  ${({ small }) => small && 'font-size: 14px'};
  ${({ grey }) => grey && 'color: #999'};
`

export const H2 = styled.h2`
  font-size: 50px;
  line-height: 50px;
  margin: 50px 0 20px;
  font-family: Montserrat;
  letter-spacing: 0.5px;
  color: #999;
`

export const H3 = styled.h3`
  font-size: 30px;
  line-height: 40px;
  margin: 70px 0 20px;
  font-family: Montserrat;
  letter-spacing: 0;
  text-transform: uppercase;
  color: #999;
  text-align: center;
`

export const B = styled.span`
  font-weight: normal;
`

export const Italic = styled.span`
  font-style: italic;
`
