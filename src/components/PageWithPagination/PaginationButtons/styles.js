import styled from 'styled-components';
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
  width: 44px;
`;
