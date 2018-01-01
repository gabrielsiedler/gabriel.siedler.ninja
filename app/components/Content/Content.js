import PropTypes from 'prop-types';

import { ContentContainer, Data } from './Content.style';

const Content = ({ children }) => (
  <ContentContainer>
    <Data>
      {children}
    </Data>
  </ContentContainer>
);

Content.propTypes = {
  children: PropTypes.any,
};

export default Content;
