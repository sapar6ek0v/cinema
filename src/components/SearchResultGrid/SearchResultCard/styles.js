import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../../constants/breakpoints';
import { colors } from '../../../constants/colors';
import { fontStyleXlBold } from '../../../helpers/cssFragments';

export const Wrapper = styled.div`
  display: flex;
  box-shadow: 0 2px 8px ${colors.shadow};
  background-color: ${colors.darkBlue};
  border: 1px solid transparent;
  border-radius: 5px;
  overflow: hidden;

  @media (min-width: ${breakpoints.extraSmall}) {
    gap: 0px;
  }

  @media (min-width: ${breakpoints.small}) {
    gap: 10px;
  }

  @media (min-width: ${breakpoints.sm}) {
    gap: 0px;
  }

  @media (min-width: ${breakpoints.md}) {
    gap: 10px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TitleLink = styled(Link)`
  text-decoration: none;
  ${fontStyleXlBold};
  transition: all 0.4s linear;
  color: ${colors.lightGray};

  &:hover,
  &:active,
  &:focus {
    color: ${colors.yellow};
  }
`;
