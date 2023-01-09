import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';
import { colors } from '../../constants/colors';
import { fontStyleSmNormal, flexJustifyCenter } from '../../helpers/cssFragments';

export const Wrapper = styled.section`
  background: ${colors.darkBlue2};

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 50px 12px;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 70px 0;
  }
`;

export const AdvertiseTitle = styled.p`
  color: ${colors.lightBlue};
  ${fontStyleSmNormal};
  ${flexJustifyCenter};
  gap: 2px;
  margin: 0;

  &::before,
  &::after {
    content: '';
    width: 5px;
    height: 1px;
    background-color: ${colors.lightBlue};
    display: inline-block;
  }
`;

export const Col4 = styled.div`
  @media (min-width: ${breakpoints.extraSmall}) {
    width: 100%;
    padding-left: 0;
  }

  @media (min-width: ${breakpoints.md}) {
    flex: 0 0 auto;
    width: 33.33333333%;
    padding-left: 40px;
  }
`;

export const Col8 = styled.div`
  @media (min-width: ${breakpoints.extraSmall}) {
    width: 100%;
    padding-right: 0;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 66.66666667%;
    flex: 0 0 auto;
    padding-right: 40px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * 0);
  margin-right: calc(-0.5 * 1.5rem);
  margin-left: calc(-0.5 * 1.5rem);

  @media (min-width: ${breakpoints.extraSmall}) {
    flex-direction: column;
    gap: 50px;
  }

  @media (min-width: ${breakpoints.sm}) {
    gap: 70px;
  }

  @media (min-width: ${breakpoints.md}) {
    gap: 0;
    flex-direction: row;
  }
`;
