import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import { fontStyleMdBold } from '../../../../helpers/cssFragments';
import { colors } from '../../../../constants/colors';
import { breakpoints } from '../../../../constants/breakpoints';

export const DropDownWrapper = styled(Dropdown)``;

export const DropDownButton = styled(Dropdown.Toggle)`
  ${fontStyleMdBold};
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s linear;
  background-color: transparent !important;
  border: none;
  color: ${colors.lightGray} !important;

  &:hover,
  &:active,
  &:focus {
    border: none !important;
    background-color: transparent !important;
    outline: none !important;
    box-shadow: none !important;
    color: ${colors.yellow} !important;
  }

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 0;
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: 2px 0;
  }
`;

export const DropDownMenu = styled(Dropdown.Menu)`
  position: absolute;
  inset: 0px auto auto 0px !important;
  transform: translate(0px, 40px) !important;
  background-color: ${colors.lightBlue2};
  padding: 0px !important;
`;

export const DropDownLink = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  ${fontStyleMdBold};
  display: block;
  color: ${colors.lightGray};
  padding: 10px 15px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.4s linear;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    background-color: ${colors.lightGray2} !important;
    color: ${colors.yellow} !important;
  }
`;
