import styled from 'styled-components';
import { breakpoints } from '../../../../constants/breakpoints';
import { colors } from '../../../../constants/colors';
import { flexAlignCenter, fontStyleXlBold } from '../../../../helpers/cssFragments';

export const CircularBarWrapper = styled.div`
  ${flexAlignCenter};

  @media (min-width: ${breakpoints.extraSmall}) {
    width: 130px;
    gap: 10px;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 150px;
    gap: 20px;
  }

  @media (min-width: ${breakpoints.xl}) {
    width: 160px;
    gap: 20px;
  }
`;

export const CircularBarTitle = styled.p`
  ${fontStyleXlBold};
  color: ${colors.lightGray};
  margin: 0;
`;
