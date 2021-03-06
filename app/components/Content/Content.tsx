import PropTypes from 'prop-types'
import { ContentContainer, Data } from './Content.style'

export const Content = ({ children }) => (
  <ContentContainer>
    <Data>{children}</Data>
  </ContentContainer>
)

Content.propTypes = {
  children: PropTypes.any,
}
