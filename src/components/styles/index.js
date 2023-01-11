import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { breakpoints } from '../../constants/breakpoints';
import { colors } from '../../constants/colors';
import {
  fontStyleXlBold,
  fontStyleMdBold,
  fontStyleSmNormal,
  fontStyleSmBold,
  flexAlignCenter,
  flexColumn,
} from '../../helpers/cssFragments';

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.position};
  gap: ${(props) => props.gap && `${props.gap}px`};
`;

export const Title = styled.h4`
  margin-bottom: 0;
  font-size: 22px;
  color: ${colors.white};
  font-weight: bold;
  text-transform: uppercase;
`;

export const ViewLink = styled(Link)`
  ${fontStyleMdBold};
  color: ${colors.lightGray};
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.4s linear;

  &:hover {
    color: ${colors.yellow};
  }
`;

export const Button = styled.button`
  color: ${(props) => (props.active ? colors.yellow : colors.lightGray)};
  text-transform: uppercase;
  background: transparent;
  border: none;
  padding: 0;
  transition: all 0.4s ease-in-out;

  &:hover {
    color: ${colors.yellow};
  }

  @media (min-width: ${breakpoints.extraSmall}) {
    font-size: 14px;
  }

  @media (min-width: ${breakpoints.small}) {
    ${fontStyleMdBold};
  }
`;

export const NoFoundTitle = styled.p`
  margin: 0;
  ${fontStyleXlBold};
  color: ${colors.lightGray};
`;

export const Wrapper = styled.section`
  min-height: calc(100vh - 75px);
  position: relative;
`;

export const Form = styled.form`
  ${flexColumn};
  gap: 20px;
`;

export const FormStack = styled.div`
  ${flexColumn};
  gap: 10px;
`;

export const Label = styled.label`
  ${fontStyleSmBold};
  color: #222222;
  text-transform: uppercase;
`;

export const Input = styled.input`
  ${fontStyleSmNormal};
  color: #222222;
  height: 42px;
  border: 1px solid #222222;
  padding: 0 15px;
  transition: all 0.4s linear;

  &:hover,
  &:focus,
  &:active {
    border-color: ${colors.pink};
    outline: none;
  }
`;

export const Checkbox = styled.input``;

export const CheckboxLabel = styled.label`
  ${fontStyleSmNormal};
  ${flexAlignCenter}
  height: 42px;
  gap: 10px;
`;

export const FormButton = styled.button`
  ${fontStyleSmBold};
  color: ${colors.white};
  text-transform: uppercase;
  border: 1px solid ${colors.white};
  background-color: ${colors.pink};
  height: 42px;
  width: 100%;
  cursor: pointer;
  transition: all 0.4s linear;

  &:focus,
  &:hover,
  &:active {
    color: ${colors.pink};
    border-color: ${colors.pink};
    background-color: ${colors.white};
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${colors.white};
    background-color: ${colors.pink};
    color: ${colors.white};
  }
`;
