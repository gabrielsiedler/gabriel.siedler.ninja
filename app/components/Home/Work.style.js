import styled from 'styled-components';

export const ImagesBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageLink = styled.a`
  display: block;
  width: 50%;
  transition: opacity 0.5s;

  :first-child {
    padding-left: 20px;
  }

  &:hover {
    opacity: 0.5;
    transition: opacity 0.5s;
  }
`;

export const Image = styled.img`
  max-width: 100%;
`;
