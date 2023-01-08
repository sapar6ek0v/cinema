import styled from 'styled-components';
import { flexColumn, fontStyleSmNormal } from '../../helpers/cssFragments';
import { colors } from '../../constants/colors';
import { breakpoints } from '../../constants/breakpoints';

export const Wrapper = styled.section`
  position: relative;
  min-height: calc(100vh - 75px);
  background: ${colors.darkBlue2};

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 50px 12px;
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 50px 0 70px;
  }
`;

export const FlexContainer = styled.div`
  ${flexColumn};

  @media (min-width: ${breakpoints.extraSmall}) {
    gap: 35px;
  }

  @media (min-width: ${breakpoints.small}) {
    gap: 48px;
  }
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
