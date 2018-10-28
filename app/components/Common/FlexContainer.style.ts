import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`
