import styled from 'styled-components';
import { breakpoints } from '../../../../constants/breakpoints';
import { flexColumn } from '../../../../helpers/cssFragments';

export const Wrapper = styled.div`
  flex: 0 0 auto;

  @media (min-width: ${breakpoints.extraSmall}) {
    width: 100%;
    padding-left: 0;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 33.33333333%;
    padding-left: 50px;
  }
`;

export const Stack = styled.div`
  ${flexColumn};

  @media (min-width: ${breakpoints.extraSmall}) {
    flex-direction: row;
    gap: 5px;
    overflow: hidden;
  }

  @media (min-width: ${breakpoints.md}) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const AdvertiseImage = styled.img`
  width: 100%;
`;
