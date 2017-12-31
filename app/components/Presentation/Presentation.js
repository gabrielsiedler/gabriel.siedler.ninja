import PropTypes from 'prop-types';

import { Menu } from '../Menu';

import { PresentationContainer, FixedBackground, Mask, Title } from './Presentation.style';

const Presentation = ({
  title, subtitle, backgroundImage, maskColor,
}) => (
  <PresentationContainer>
    <FixedBackground image={backgroundImage} />
    <Mask color={maskColor} />
    <Title>
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
    </Title>
    <Menu />
  </PresentationContainer>
);

Presentation.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  backgroundImage: PropTypes.string,
  maskColor: PropTypes.string,
};

export default Presentation;
