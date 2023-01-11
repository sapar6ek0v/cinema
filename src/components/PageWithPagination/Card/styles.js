import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../../constants/breakpoints';
import { colors } from '../../../constants/colors';
import {
  flexColumn,
  fontStyleMdNormal,
  fontStyleSmNormal,
  fontStyleXlBold,
  fontStyleXlNormal,
} from '../../../helpers/cssFragments';

export const CardWrapper = styled.div`
  ${flexColumn};
  align-items: center;

  @media (min-width: ${breakpoints.extraSmall}) {
    gap: 4px;
  }

  @media (min-width: ${breakpoints.md}) {
    gap: 8px;
  }
`;

export const ImageWrapper = styled(Link)`
  display: block;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;

  &:hover {
    filter: brightness(0.3);
  }

  @media (min-width: ${breakpoints.extraSmall}) {
    width: 70%;
    height: 284px;
  }

  @media (min-width: ${breakpoints.small}) {
    width: 85%;
    height: 265px;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 100%;
  }
`;

export const Image = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const VoteAverage = styled.p`
  margin: 0;
  ${fontStyleXlNormal};
  color: ${colors.orange};

  span {
    ${fontStyleSmNormal};
    color: ${colors.white};
  }
`;

export const TitleLink = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  ${fontStyleXlBold};
  line-height: 26px;
  font-size: 20px;
  color: ${colors.white};
  transition: all 0.4s ease-in-out;

  &:hover {
    color: ${colors.yellow};
  }
`;

export const Date = styled.p`
  margin: 0;
  ${fontStyleMdNormal};
  color: ${colors.lightBlue};
`;

export const StarIcon = styled(FontAwesomeIcon)`
  color: ${colors.orange};
  font-size: 20px;
`;
