import styled from 'styled-components';
import { breakpoints } from '../../../constants/breakpoints';

export const PopularMoviesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const PopularMoviesGroup = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: ${breakpoints.extraSmall}) {
    gap: 10px;
  }

  @media (min-width: ${breakpoints.small}) {
    gap: 30px;
  }
`;
