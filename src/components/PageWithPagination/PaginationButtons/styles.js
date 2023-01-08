import styled from 'styled-components';
import { breakpoints } from '../../../constants/breakpoints';
import { colors } from '../../../constants/colors';
import { flexAlignCenter, fontStyleMdNormal } from '../../../helpers/cssFragments';
import { Button } from '../styles';

export const ButtonsWrapper = styled.div`
  ${flexAlignCenter};
  gap: 5px;
`;

export const Dots = styled.span`
  ${fontStyleMdNormal};
  color: ${colors.yellow};
`;

export const PaginationButton = styled(Button)`
  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 4px 5px;
    font-size: 14px;
    width: 38px;
  }

  @media (min-width: ${breakpoints.small}) {
    padding: 4px 8px;
    font-size: 16px;
    width: 44px;
  }
`;
