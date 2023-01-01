import styled from 'styled-components';
import { flexAlignCenter } from '../../../helpers/cssFragments';
import { Button } from '../styles';

export const ButtonsWrapper = styled.div`
  ${flexAlignCenter};
  gap: 5px;
`;

export const PaginationButton = styled(Button)`
  width: 44px;
`;
