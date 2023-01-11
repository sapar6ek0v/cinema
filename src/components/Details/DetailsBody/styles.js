import styled from 'styled-components';
import { breakpoints } from '../../../constants/breakpoints';
import { colors } from '../../../constants/colors';
import { flexColumn } from '../../../helpers/cssFragments';

export const DetailsBodyWrapper = styled.section`
  min-height: 100vh;
  position: relative;
`;

export const FlexContainer = styled.div`
  display: flex;
  background-color: ${colors.darkBlue2};

  @media (min-width: ${breakpoints.extraSmall}) {
    flex-wrap: wrap-reverse;
  }

  @media (min-width: ${breakpoints.md}) {
    flex-wrap: nowrap;
  }
`;

export const Column8 = styled.div`
  flex: 0 0 auto;

  @media (min-width: ${breakpoints.extraSmall}) {
    width: 100%;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 66.66666667%;
  }
`;

export const Column4 = styled.div`
  flex: 0 0 auto;

  @media (min-width: ${breakpoints.extraSmall}) {
    width: 100%;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 33.33333333%;
  }
`;

export const Title = styled.h3`
  color: ${colors.lightGray};
  margin: 0;
`;

export const ContentWrapper = styled.div`
  padding: 50px 24px;
  border-bottom: 1px solid ${colors.link};

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 30px 10px;

    &:first-child {
      padding-top: 0;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 50px 24px;

    &:first-child {
      padding-top: 50px;
    }
  }
`;

export const ContentFlexContainer = styled.div`
  ${flexColumn};

  @media (min-width: ${breakpoints.extraSmall}) {
    gap: 20px;
  }

  @media (min-width: ${breakpoints.md}) {
    gap: 40px;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  overflow: auto;
  gap: 30px;
  position: relative;

  @media (min-width: ${breakpoints.extraSmall}) {
    padding-bottom: 20px;
  }

  @media (min-width: ${breakpoints.md}) {
    padding-bottom: 30px;
  }
`;
