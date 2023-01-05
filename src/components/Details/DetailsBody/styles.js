import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { flexColumn } from '../../../helpers/cssFragments';

export const DetailsBodyWrapper = styled.section`
  min-height: calc(100vh - 74px);
  position: relative;
  background-color: ${(props) => props.active && colors.darkBlue};
`;

export const FlexContainer = styled.div`
  display: flex;
  background-color: ${colors.darkBlue2};
`;

export const Column8 = styled.div`
  flex: 0 0 auto;
  width: 66.66666667%;
`;

export const Column4 = styled.div`
  flex: 0 0 auto;
  width: 33.33333333%;
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
`;

export const ContentFlexContainer = styled.div`
  ${flexColumn};
  gap: 40px;
`;

export const SliderContainer = styled.div`
  display: flex;
  overflow: auto;
  gap: 30px;
  padding-bottom: 35px;
  position: relative;
  /* 
  &::after {
    content: '';
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #fff 100%);
    will-change: opacity;
    pointer-events: none;
  } */
`;
