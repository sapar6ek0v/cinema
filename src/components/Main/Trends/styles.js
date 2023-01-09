import styled from 'styled-components';

import { breakpoints } from '../../../constants/breakpoints';
import { colors } from '../../../constants/colors';

export const Wrapper = styled.section`
  min-height: 100vh;
  position: relative;
  background-color: ${colors.darkBlue2};

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 50px 12px;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 70px 0;
  }
`;
