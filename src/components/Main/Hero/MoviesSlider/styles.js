import styled from 'styled-components';
import {
  flexAlignCenter,
  flexColumn,
  fontStyleXlNormal,
  fontStyleMdNormal,
} from '../../../../helpers/cssFragments';

export const SliderWrapper = styled.div`
  margin-bottom: 20px;
  padding: 2px 10px;
`;

export const SliderImage = styled.img`
  display: block;
  width: 100%;
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
  color: orange;
  font-size: 20px;
`;

export const SliderVotes = styled.p`
  ${fontStyleXlNormal};
  color: #ffff;
  margin: 0;

  span {
    ${fontStyleMdNormal};
  }
`;

export const SliderTitle = styled.p`
  ${fontStyleXlNormal};
  color: #ffff;
  font-size: 20px;
  text-align: center;
  margin: 0;
`;

export const SliderDate = styled.p`
  ${fontStyleMdNormal};
  color: #ffff;
  margin: 0;
`;
