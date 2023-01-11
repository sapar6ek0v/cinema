import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { breakpoints } from '../../../../constants/breakpoints';
import { colors } from '../../../../constants/colors';
import {
  flexColumn,
  flexAlignCenter,
  fontStyleMdNormal,
  fontStyleXlBold,
} from '../../../../helpers/cssFragments';
import { Title } from '../../../styles';

export const Wrapper = styled.div`
  ${flexColumn};

  @media (min-width: ${breakpoints.extraSmall}) {
    width: 100%;
    gap: 30px;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 66.66666667%;
    flex: 0 0 auto;
  }
`;

export const AdvertiseImage = styled.img`
  height: 260px;
  width: 100%;
  object-fit: cover;
`;

export const Stack = styled.div`
  ${flexColumn};

  @media (min-width: ${breakpoints.extraSmall}) {
    gap: 25px;
  }

  @media (min-width: ${breakpoints.sm}) {
    gap: 30px;
  }
`;

export const TrendTitle = styled(Title)``;

export const MainBlock = styled.div`
  ${flexAlignCenter};

  @media (min-width: ${breakpoints.extraSmall}) {
    flex-wrap: wrap;
    gap: 5px;
  }

  @media (min-width: ${breakpoints.small}) {
    flex-wrap: nowrap;
    gap: 30px;
  }
`;

export const TrendImage = styled.img`
  width: 190px;
  height: 250px;
  object-fit: cover;
`;

export const TitleStack = styled.div`
  ${flexColumn};

  @media (min-width: ${breakpoints.extraSmall}) {
    gap: 6px;
  }

  @media (min-width: ${breakpoints.sm}) {
    gap: 15px;
  }

  @media (min-width: ${breakpoints.md}) {
    gap: 20px;
  }
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

export const Grid = styled.div`
  display: grid;

  @media (min-width: ${breakpoints.extraSmall}) {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  @media (min-width: ${breakpoints.small}) {
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }
`;

export const TrendCard = styled.div`
  width: 100%;
  ${flexColumn};

  @media (min-width: ${breakpoints.extraSmall}) {
    gap: 6px;
  }

  @media (min-width: ${breakpoints.extraSmall}) {
    gap: 15px;
  }
`;
