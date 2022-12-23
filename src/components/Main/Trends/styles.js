import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  flexAlignCenter,
  flexColumn,
  fontStyleMdNormal,
  fontStyleXlBold,
} from '../../../helpers/cssFragments';
import { Title } from '../../styles';

export const TrendWrapper = styled.section`
  padding: 70px 0;
  background-color: #020d18;
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
  color: #4280bf;
  text-decoration: none;
  transition: all 0.4s linear;

  &:hover {
    color: #dcf836;
  }
`;

export const TrendCardDate = styled.p`
  ${fontStyleMdNormal};
  color: #abb7c4;
  margin: 0;
`;

export const TrendCardDesc = styled(TrendCardDate)`
  ${fontStyleMdNormal};
  color: #4280bf;
  margin: 0;

  span {
    ${fontStyleMdNormal};
    color: #abb7c4;
  }
`;
