import styled from 'styled-components';
import { flexColumn, fontStyleSmNormal } from '../../helpers/cssFragments';
import { colors } from '../../constants/colors';

export const Wrapper = styled.section`
  position: relative;
  min-height: calc(100vh - 75px);
  background: ${colors.darkBlue2};
  padding: 50px 0px;
`;

export const FlexContainer = styled.div`
  ${flexColumn};
  gap: 48px;
`;

export const SearchInput = styled.input`
  height: 46px;
  width: 100%;
  outline: none;
  background-color: ${colors.lightBlue};
  color: ${colors.lightGray};
  ${fontStyleSmNormal};
  padding: 6px 12px;
  border: 4px solid ${colors.pink};
`;
