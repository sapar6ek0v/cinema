import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../constants/colors';
import {
  flexAlignCenter,
  flexColumn,
  fontStyleMdBold,
  fontStyleSmBold,
  fontStyleXlBold,
} from '../../helpers/cssFragments';

export const SlickSliderCard = styled.div`
  ${flexColumn};
  text-align: center;
  padding: 0px 10px;
`;

export const SlickSliderImageWrapper = styled.figure`
  position: relative;
  transition: all 0.4s linear;
  margin: 0;

  &:hover {
    filter: brightness(0.4);

    figcaption {
      opacity: 1;
    }
  }
`;

export const SlickSliderImage = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 264px;
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
