import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import { flexColumn, fontStyleMdNormal } from '../../../../helpers/cssFragments';

export const List = styled.ul`
  ${flexColumn};
  gap: 10px;
  list-style: none;
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
