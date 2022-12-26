import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import {
  flexAlignCenter,
  flexColumn,
  fontStyleXlNormal,
  fontStyleMdNormal,
} from '../../../../helpers/cssFragments';

export const SliderWrapper = styled.div`
  padding: 5px 10px;
  margin-bottom: 20px;
`;

export const SliderImage = styled.img`
  display: block;
  width: 100%;
`;

export const ImageLink = styled(Link)`
  display: block;
  text-decoration: none;
  transition: all 0.4s linear;

  &:hover {
    filter: brightness(0.3);
  }
`;

export const SliderFlexColumn = styled.div`
  ${flexColumn};
  align-items: center;
  gap: 5px;
`;

export const SliderFlexBox = styled.div`
  ${flexAlignCenter};
`;

export const SliderStar = styled.div`
  color: ${colors.orange};
  font-size: 20px;
`;

export const SliderVotes = styled.p`
  ${fontStyleXlNormal};
  color: ${colors.white};
  margin: 0;

  span {
    ${fontStyleMdNormal};
  }
`;

export const SliderLink = styled(Link)`
  ${fontStyleXlNormal};
  color: ${colors.white};
  font-size: 20px;
  text-align: center;
  display: block;
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    color: ${colors.yellow};
  }
`;

export const SliderDate = styled.p`
  ${fontStyleMdNormal};
  color: ${colors.white};
  margin: 0;
`;
