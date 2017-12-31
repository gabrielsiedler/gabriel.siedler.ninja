import styled from 'styled-components';

export const ImagesBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageLink = styled.a`
  display: block;
  width: 50%;

  :first-child {
    padding-left: 20px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const Image = styled.img`
  max-width: 100%;
`;
