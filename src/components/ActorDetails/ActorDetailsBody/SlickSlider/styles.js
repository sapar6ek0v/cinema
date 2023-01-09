import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { colors } from '../../../../constants/colors';
import { breakpoints } from '../../../../constants/breakpoints';
import {
  flexAlignCenter,
  flexColumn,
  fontStyleMdBold,
  fontStyleXlNormal,
  fontStyleSmNormal,
} from '../../../../helpers/cssFragments';

export const SlickSliderWrapper = styled.div`
  @media (min-width: ${breakpoints.extraSmall}) {
    overflow: auto;
    padding: 30px 0px;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 40px 0px;
    overflow: visible;
  }
`;

export const SlickSliderCard = styled.div`
  padding: 20px;
`;

export const SlickSliderImageWrapper = styled.figure`
  margin: 0;
  position: relative;
  width: 100%;
  transition: all 0.5s ease-out;
  &:hover {
    filter: brightness(50%);

    figcaption {
      opacity: 1;
    }
  }
`;

export const SlickSliderImage = styled.img`
  width: 100%;
  height: 305px;
  object-fit: cover;
  border-radius: 5px;

  @media (min-width: ${breakpoints.extraSmall}) {
    margin: 0 auto;
    width: 78%;
  }

  @media (min-width: ${breakpoints.small}) {
    margin: 0 auto;
    width: 100%;
  }
`;

export const ExpandMore = styled.figcaption`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 10;
  background-color: ${colors.pink};
  padding: 5px 8px;
  border-radius: 5px;
`;

export const ExpandMoreLink = styled(Link)`
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

export const Stack = styled.div`
  ${flexColumn};
  align-items: center;
  gap: 10px;
`;

export const SlickSliderLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  display: block;
  text-transform: uppercase;
  ${fontStyleMdBold};
  color: ${colors.white};
  transition: all 0.4s linear;

  &:hover,
  &:active,
  &:focus {
    color: ${colors.yellow};
  }
`;

export const SlickSliderVoteAverage = styled.div`
  ${flexAlignCenter};
  gap: 4px;
`;

export const SlickSliderVoteAverageTitle = styled.p`
  margin: 0;
  ${fontStyleXlNormal};
  color: ${colors.orange};
  display: flex;
  align-items: baseline;

  span {
    ${fontStyleSmNormal};
    color: ${colors.white};
  }
`;

export const SlickSliderVoteAverageStar = styled(FontAwesomeIcon)`
  color: ${colors.orange};
  font-size: 20px;
`;
