import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { fontStyleXlBold } from '../../../helpers/cssFragments';
import { Group } from '../../styles';

export const Wrapper = styled.section`
  padding: 50px 0px;
  background-color: ${colors.darkBlue2};
  min-height: 100vh;
  position: relative;
`;

export const Title = styled.h5`
  ${fontStyleXlBold};
  font-size: 28px;
  line-height: 1.2;
  color: ${colors.white};
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const ButtonGroup = styled(Group)`
  gap: 20px;
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  ${fontStyleXlBold};
  font-size: 22px;
  color: ${(props) => (props.active ? colors.yellow : colors.lightGray)};
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    color: ${colors.yellow};
  }
`;
