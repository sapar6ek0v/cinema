import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import { breakpoints } from '../../../../constants/breakpoints';
import { flexColumn, fontStyleMdNormal } from '../../../../helpers/cssFragments';

export const List = styled.ul`
  ${flexColumn};
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: ${breakpoints.extraSmall}) {
    gap: 6px;
  }

  @media (min-width: ${breakpoints.sm}) {
    gap: 10px;
  }
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  ${fontStyleMdNormal};
  color: ${colors.lightGray};
  transition: all 0.4s linear;

  &:hover,
  &:active,
  &:focus {
    color: ${colors.yellow};
  }
`;
