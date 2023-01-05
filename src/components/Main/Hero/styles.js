import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import bg from '../../../images/moviesBg.jpg';

export const HeroWrapper = styled.section`
  padding: 10px 0 70px;
  position: relative;
  min-height: calc(100vh - 74px);
  background: ${(props) => (props.active ? colors.darkBlue : 'transparent')} url(${bg}) center/ cover;
`;
