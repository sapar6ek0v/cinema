import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../constants/colors';
import { flexAlignCenter, flexColumn, fontStyleSmBold, fontStyleXlBold } from '../../helpers/cssFragments';

export const SlickSliderCard = styled.div`
  ${flexColumn};
  text-align: center;
  padding: 0px 10px;
`;

export const SlickSliderImageWrapper = styled.div`
  position: relative;
`;

export const SlickSliderImage = styled.img`
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  transition: all 0.4s linear;

  &:hover {
    filter: brightness(0.4);

    & + a {
      visibility: visible;
    }
  }
`;

export const SlickSliderLink = styled(Link)`
  text-decoration: none;
  ${flexAlignCenter};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
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
