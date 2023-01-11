import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { breakpoints } from '../../../constants/breakpoints';
import { colors } from '../../../constants/colors';
import {
  flexAlignCenter,
  flexColumn,
  fontStyleSmNormal,
  fontStyleSmBold,
  fontStyleMdBold,
} from '../../../helpers/cssFragments';
import { Title } from '../../styles';

export const PopularActorWrapper = styled.div`
  ${flexColumn};
  gap: 25px;

  @media (min-width: ${breakpoints.md}) {
    margin-left: 0;
  }

  @media (min-width: ${breakpoints.xl}) {
    margin-left: 10px;
  }

  @media (min-width: ${breakpoints.xl}) {
    margin-left: 40px;
  }
`;

export const PopularActorVerticalWrapper = styled.div`
  @media (min-width: ${breakpoints.extraSmall}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  @media (min-width: ${breakpoints.small}) {
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const AdvertiseImage = styled.img`
  width: 100%;
`;

export const PopularActorTitle = styled(Title)`
  padding-bottom: 10px;
  border-bottom: 1px solid ${colors.lightBlue};
`;

export const PopularActorCard = styled.div`
  ${flexAlignCenter};
  gap: 20px;
`;

export const PopularActorImage = styled.img`
  width: 75px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
`;

export const PopularActorName = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  ${fontStyleSmBold};
  transition: all 0.4s linear;

  &:hover {
    color: ${colors.yellow};
  }
`;

export const PopularActorKnownFor = styled.p`
  color: ${colors.lightGray};
  ${fontStyleSmNormal};
  text-transform: uppercase;
  margin: 0;
`;

export const ViewAllPopularActorLink = styled(Link)`
  color: ${colors.lightGray};
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: ${colors.yellow};
  }

  @media (min-width: ${breakpoints.extraSmall}) {
    font-size: 14px;
  }

  @media (min-width: ${breakpoints.small}) {
    ${fontStyleMdBold};
  }
`;
