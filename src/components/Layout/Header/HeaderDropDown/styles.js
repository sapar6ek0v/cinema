import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import { fontStyleMdBold } from '../../../../helpers/cssFragments';
import { Link } from 'react-router-dom';

export const DropDownWrapper = styled(Dropdown)``;

export const DropDownButton = styled(Dropdown.Toggle)`
  ${fontStyleMdBold};
  text-transform: uppercase;
  padding: 2px 8px;
  cursor: pointer;
  transition: all 0.4s linear;
  background-color: transparent !important;
  border: none;
  color: #abb7c4 !important;

  &:hover,
  &:active,
  &:focus {
    border: none !important;
    background-color: transparent !important;
    outline: none !important;
    box-shadow: none !important;
    color: #dcf836 !important;
  }
`;

export const DropDownMenu = styled(Dropdown.Menu)`
  position: absolute;
  inset: 0px auto auto 0px !important;
  transform: translate(0px, 40px) !important;
  background-color: #20232a;
  padding: 0px !important;
`;

export const DropDownLink = styled(Link)`
  ${fontStyleMdBold};
  display: block;
  color: #abb7c4;
  padding: 10px 15px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.4s linear;

  &:hover,
  &:active,
  &:focus {
    background-color: #333844d1 !important;
    color: #dcf836 !important;
  }
`;
