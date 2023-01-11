import styled from 'styled-components';
import { flexColumn } from '../../helpers/cssFragments';
import { breakpoints } from '../../constants/breakpoints';

export const Grid = styled.div`
  display: grid;

  @media (min-width: ${breakpoints.extraSmall}) {
    grid-template-columns: 1fr;
    place-items: center;
    gap: 30px;
  }

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
    place-items: flex-start;
    gap: 15px;
  }

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 2fr;
    gap: 40px;
  }

  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: 1fr 3fr;
  }
`;

export const FlexContainer = styled.div`
  ${flexColumn};
  gap: 25px;

  @media (min-width: ${breakpoints.md}) {
    width: 100%;
  }
`;
