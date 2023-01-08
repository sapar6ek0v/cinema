import styled from 'styled-components';
import { breakpoints } from '../../../constants/breakpoints';
import { colors } from '../../../constants/colors';
import { fontStyleXlBold } from '../../../helpers/cssFragments';
import { Group } from '../../styles';

export const Wrapper = styled.section`
  background-color: ${colors.darkBlue2};
  min-height: 100vh;
  position: relative;

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 50px 12px;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 50px 0;
  }
`;

export const Title = styled.h5`
  ${fontStyleXlBold};
  font-size: 28px;
  line-height: 1.2;
  color: ${colors.white};
  text-transform: uppercase;
  margin-bottom: 8px;

  @media (min-width: ${breakpoints.extraSmall}) {
    font-size: 24px;
  }

  @media (min-width: ${breakpoints.extraSmall}) {
    font-size: 28px;
  }
`;

export const ButtonGroup = styled(Group)`
  @media (min-width: ${breakpoints.extraSmall}) {
    gap: 10px;
  }

  @media (min-width: ${breakpoints.sm}) {
    gap: 20px;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 0;
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

  @media (min-width: ${breakpoints.extraSmall}) {
    font-size: 18px;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 22px;
  }
`;
