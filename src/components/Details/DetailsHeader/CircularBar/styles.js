import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import { flexAlignCenter, fontStyleXlBold } from '../../../../helpers/cssFragments';

export const CircularBarWrapper = styled.div`
  width: 160px;
  ${flexAlignCenter};
  gap: 20px;
`;

export const CircularBarTitle = styled.p`
  ${fontStyleXlBold};
  color: ${colors.lightGray};
  margin: 0;
`;
