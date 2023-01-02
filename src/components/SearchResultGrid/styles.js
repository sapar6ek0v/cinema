import styled from 'styled-components';
import { flexColumn } from '../../helpers/cssFragments';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 40px;
`;

export const FlexContainer = styled.div`
  ${flexColumn};
  gap: 25px;
`;
