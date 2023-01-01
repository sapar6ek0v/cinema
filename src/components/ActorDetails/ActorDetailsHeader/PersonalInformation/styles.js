import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import { flexColumn, fontStyleMdNormal, fontStyleXlBold } from '../../../../helpers/cssFragments';
import { OverviewTitle } from '../Overview/styles';

export const Wrapper = styled.div`
  ${flexColumn};
  gap: 20px;
`;

export const FlexColumnContainer = styled.div`
  ${flexColumn};
  gap: 16px;
`;

export const Title = styled(OverviewTitle)``;

export const Label = styled.p`
  ${fontStyleXlBold};
  margin: 0;
  color: ${colors.lightGray};
`;

export const Text = styled.p`
  margin: 0;
  ${fontStyleMdNormal};
  color: ${colors.lightGray};
`;

export const Stack = styled.div`
  ${flexColumn};
  border-bottom: 1px solid ${colors.link};
`;
