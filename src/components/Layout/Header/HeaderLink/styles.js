import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import { breakpoints } from '../../../../constants/breakpoints';
import { fontStyleMdBold } from '../../../../helpers/cssFragments';

export const HeaderLinkBtn = styled(Link)`
  background: transparent;
  ${fontStyleMdBold};
  color: ${colors.lightGray};
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s linear;

  &:hover,
  &:active,
  &:focus {
    color: ${colors.yellow};
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: 2px 0;
  }
`;
