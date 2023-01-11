import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { breakpoints } from '../../../constants/breakpoints';
import { colors } from '../../../constants/colors';
import {
  flexAlignCenter,
  flexColumn,
  fontStyleMdBold,
  fontStyleSmBold,
  fontStyleXlBold,
} from '../../../helpers/cssFragments';

export const SlickSliderWrapper = styled.div``;

export const SlickSliderCard = styled.div`
  ${flexColumn};
  text-align: center;

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 0px 10px 20px;
  }

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 0px 10px;
  }
`;

export const SlickSliderImageWrapper = styled.figure`
  margin: 0 auto;
  position: relative;
  transition: all 0.4s linear;

  &:hover {
    filter: brightness(0.4);

    figcaption {
      opacity: 1;
    }
  }

  @media (min-width: ${breakpoints.extraSmall}) {
    height: 240px;
    width: 100%;
  }

  @media (min-width: ${breakpoints.sm}) {
    height: 287px;
  }

  @media (min-width: ${breakpoints.md}) {
    height: 264px;
  }
`;

export const SlickSliderImage = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SlickSliderButton = styled.figcaption`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 10;
  background-color: ${colors.pink};
  padding: 2px 8px;
  border-radius: 5px;
`;

export const SlickSliderLink = styled(Link)`
  text-decoration: none;
  ${flexAlignCenter};
  gap: 4px;
  ${fontStyleMdBold};
  color: ${colors.white};
  transition: all 0.4s linear;

  &:hover,
  &:active,
  &:focus {
    color: ${colors.pinkHover};
  }
`;

export const SlickSliderTitle = styled(Link)`
  text-decoration: none;
  ${fontStyleSmBold};
  color: ${colors.white};
  text-transform: uppercase;

  &:hover {
    color: ${colors.yellow};
  }
`;

export const SlickSliderVoteAverageStar = styled.div`
  color: ${colors.orange};
  font-size: 20px;
`;

export const SlickSliderVoteAverageTitle = styled.p`
  ${fontStyleXlBold};
  color: ${colors.white};
  margin: 0;

  span {
    ${fontStyleSmBold};
    color: ${colors.white};
  }
`;
