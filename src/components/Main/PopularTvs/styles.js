import styled from 'styled-components';
import { breakpoints } from '../../../constants/breakpoints';
import { PopularMoviesWrapper, PopularMoviesGroup } from '../PopularMovies/styles';

export const PopularTvsWrapper = styled(PopularMoviesWrapper)`
  @media (min-width: ${breakpoints.extraSmall}) {
    padding-top: 60px;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding-top: 90px;
  }
`;

export const PopularTvsGroup = styled(PopularMoviesGroup)``;
