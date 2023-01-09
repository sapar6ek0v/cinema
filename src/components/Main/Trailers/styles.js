import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { breakpoints } from '../../../constants/breakpoints';

export const Wrapper = styled.section`
  //TODO:
  min-height: 100vh;
  /* padding: 70px 0; */
  background-color: ${colors.darkBlue};

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 50px 12px;
  }
`;
