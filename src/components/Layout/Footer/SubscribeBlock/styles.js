import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import {
  fontStyleMdNormal,
  fontStyleSmNormal,
  fontStyleSmBold,
  flexAlignCenter,
} from '../../../../helpers/cssFragments';

export const Description = styled.p`
  margin: 0;
  ${fontStyleMdNormal};
  color: ${colors.lightGray};
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 6px 26px 6px 12px;
  ${fontStyleSmNormal};
  color: ${colors.lightGray};
  border: 2px solid ${colors.darkGray};
  border-radius: 3px;
  background-color: ${colors.darkBlue2};
  transition: all 0.4s linear;

  &:hover,
  &:focus,
  &:focus-within,
  &:active {
    outline: none;
    border-color: ${colors.pink};
    & + svg {
      color: ${colors.pink};
    }
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 10px;
  right: 12px;
  color: ${colors.lightGray};
  transition: all 0.4s linear;
`;

export const SubscribeLink = styled(Link)`
  ${fontStyleSmBold};
  color: ${colors.pink};
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.4s linear;
  ${flexAlignCenter};
  gap: 4px;

  &:hover,
  &:focus,
  &:active {
    border-color: ${colors.mediaLink};
  }
`;
