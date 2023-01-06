import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import {
  flexAlignCenter,
  flexColumn,
  fontStyleMdNormal,
  fontStyleXlBold,
} from '../../../helpers/cssFragments';
import { Title } from '../../styles';

export const TrendWrapper = styled.section`
  padding: 70px 0;
  min-height: 100vh;
  position: relative;
  background-color: ${colors.darkBlue2};
`;

export const TrendFlexColumn = styled.div`
  ${flexColumn};
  gap: ${(props) => props.gap && `${props.gap}px`};
`;

export const AdvertiseImage = styled.img`
  height: 250px;
  width: 100%;
`;

export const TrendTitle = styled(Title)``;

export const TrendBlock = styled.div`
  ${flexAlignCenter};
  gap: 30px;
`;

export const TrendImage = styled.img`
  width: 190px;
  height: 250px;
  object-fit: cover;
`;

export const TrendCardLink = styled(Link)`
  ${fontStyleXlBold};
  color: ${colors.link};
  text-decoration: none;
  transition: all 0.4s linear;

  &:hover {
    color: ${colors.yellow};
  }
`;

export const TrendCardDate = styled.p`
  ${fontStyleMdNormal};
  color: ${colors.lightGray};
  margin: 0;
`;

export const TrendCardDesc = styled(TrendCardDate)`
  ${fontStyleMdNormal};
  color: ${colors.link};
  margin: 0;

  span {
    ${fontStyleMdNormal};
    color: ${colors.lightGray};
  }
`;

export const TrendColumn6 = styled(TrendFlexColumn)`
  padding: 10px;
  flex: 0 0 auto;
  width: 50%;
`;

export const TrendColumn8 = styled(TrendFlexColumn)`
  flex: 0 0 auto;
  width: 66.66666667%;
`;
