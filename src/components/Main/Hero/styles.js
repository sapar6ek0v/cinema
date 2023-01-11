import styled from 'styled-components';
import { breakpoints } from '../../../constants/breakpoints';
import { colors } from '../../../constants/colors';
import bg from '../../../images/moviesBg.jpg';

export const HeroWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  background: ${(props) => (props.active ? colors.darkBlue : 'transparent')} url(${bg}) center/ cover;

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 50px 0 70px;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 74px 0 70px;
  }
`;
