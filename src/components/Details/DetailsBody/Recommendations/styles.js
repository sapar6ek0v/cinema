import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import {
  flexJustifySpaceBetween,
  fontStyleSmBold,
  fontStyleSmNormal,
} from '../../../../helpers/cssFragments';

export const CardWrapper = styled.div`
  width: 250px;
`;

export const ImageWrapperLink = styled(Link)`
  text-decoration: none;
  transition: all 0.4s linear;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 250px;
  height: 140px;
  border-radius: 8px;
`;

export const TitleGroup = styled.div`
  ${flexJustifySpaceBetween};
  gap: 10px;
`;

export const TitleLink = styled(Link)`
  display: block;
  text-decoration: none;
  ${fontStyleSmBold};
  color: ${colors.white};
  text-transform: uppercase;
  transition: all 0.4s linear;

  &:hover,
  &:active,
  &:focus {
    color: ${colors.yellow};
  }
`;

export const VoteAverage = styled.p`
  margin: 0;
  color: ${colors.yellow};
  ${fontStyleSmNormal};
`;
