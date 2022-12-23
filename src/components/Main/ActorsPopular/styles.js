import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  flexAlignCenter,
  flexColumn,
  fontStyleSmNormal,
  fontStyleSmBold,
  fontStyleMdBold,
} from '../../../helpers/cssFragments';
import { Title } from '../../styles';

export const PopularActorWrapper = styled.div`
  margin-left: 40px;
  ${flexColumn};
  gap: 25px;
`;

export const PopularActorVerticalWrapper = styled.div`
  ${flexColumn};
  gap: 25px;
`;

export const AdvertiseImage = styled.img`
  width: 100%;
`;

export const PopularActorTitle = styled(Title)`
  padding-bottom: 10px;
  border-bottom: 1px solid #233a50;
`;

export const PopularActorLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  ${flexAlignCenter};
  gap: 20px;
`;

export const PopularActorImage = styled.img`
  width: 70px;
  object-fit: cover;
  border-radius: 5px;
  background-position: center;
  background-size: cover;
  margin-right: 20px;
`;

export const PopularActorName = styled.h6`
  color: #fff;
  ${fontStyleSmBold};
  margin: 0;
`;

export const PopularActorKnownFor = styled.p`
  color: #abb7c4;
  ${fontStyleSmNormal};
  text-transform: uppercase;
  margin: 0;
`;

export const ViewAllPopularActorLink = styled(Link)`
  ${fontStyleMdBold};
  color: #abb7c4;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: #dcf836;
  }
`;
