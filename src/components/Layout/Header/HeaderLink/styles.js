import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import { fontStyleMdBold } from '../../../../helpers/cssFragments';

export const HeaderLinkBtn = styled(Link)`
  background: transparent;
  ${fontStyleMdBold};
  color: ${colors.lightGray};
  text-transform: uppercase;
  padding: 2px 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s linear;

  &:hover,
  &:active,
  &:focus {
    color: ${colors.yellow};
  }
`;
