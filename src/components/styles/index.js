import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { breakpoints } from '../../constants/breakpoints';
import { colors } from '../../constants/colors';
import { fontStyleXlBold, fontStyleMdBold } from '../../helpers/cssFragments';

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
