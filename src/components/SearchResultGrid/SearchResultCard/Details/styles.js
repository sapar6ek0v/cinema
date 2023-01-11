import styled from 'styled-components';
import { breakpoints } from '../../../../constants/breakpoints';
import { colors } from '../../../../constants/colors';
import { flexColumn, fontStyleMdNormal, fontStyleSmNormal } from '../../../../helpers/cssFragments';

export const ImageWrapper = styled.div`
  height: inherit;
  object-fit: cover;

  @media (min-width: ${breakpoints.extraSmall}) {
    min-width: 104px;
    width: 104px;
  }

  @media (min-width: ${breakpoints.small}) {
    min-width: 94px;
    width: 94px;
  }
`;

export const Stack = styled.div`
  ${flexColumn};
  gap: 10px;
  padding: 10px 15px;
`;

export const Date = styled.p`
  margin: 0;
  ${fontStyleSmNormal};
  color: ${colors.pathBlue};
`;

export const Overview = styled.p`
  margin: 0;
  ${fontStyleMdNormal};
  color: ${colors.white};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
