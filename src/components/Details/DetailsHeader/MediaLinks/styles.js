import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import { flexAlignCenter } from '../../../../helpers/cssFragments';

export const MediaLinksWrapper = styled.div`
  ${flexAlignCenter};
  gap: 20px;
`;

export const MediaLink = styled.a`
  display: block;
  width: 36px;
  font-size: 32px;
  color: ${colors.mediaLink};
  transition: all 0.4s linear;

  &:hover,
  &:focus,
  &:active {
    font-size: 28px;
    color: ${colors.yellow};
  }
`;
