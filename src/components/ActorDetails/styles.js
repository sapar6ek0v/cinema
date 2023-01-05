import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Wrapper = styled.section`
  min-height: calc(100vh - 74px);
  position: relative;
  background-color: ${(props) => props.active && colors.darkBlue};
`;
