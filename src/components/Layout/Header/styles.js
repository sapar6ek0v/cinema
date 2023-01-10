import styled from 'styled-components';
import { breakpoints } from '../../../constants/breakpoints';
import { colors } from '../../../constants/colors';

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: ${colors.lightBlue2};
  position: fixed;
  top: 0;
  z-index: 7;

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 10px 0;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 20px 0;
  }
`;
