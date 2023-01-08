import styled from 'styled-components';
import { breakpoints } from '../../../../constants/breakpoints';

export const Grid = styled.div`
  display: grid;

  @media (min-width: ${breakpoints.extraSmall}) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 15px;
  }

  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const ImageCard = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;
