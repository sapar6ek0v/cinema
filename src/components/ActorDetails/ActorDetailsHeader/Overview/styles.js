import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import {
  flexAlignCenter,
  flexColumn,
  fontStyleMdNormal,
  fontStyleSmNormal,
  fontStyleXlBold,
} from '../../../../helpers/cssFragments';

export const OverviewTitle = styled.p`
  ${fontStyleXlBold};
  font-size: 21px;
  color: ${colors.link};
  text-transform: capitalize;
  margin: 0px;
`;

export const OverviewFlexColumn = styled.div`
  ${flexColumn};
  gap: ${(props) => props.gap && `${props.gap}px`};
`;

export const OverviewHiddenWrapper = styled(OverviewFlexColumn)`
  position: relative;
  max-height: ${(props) => (props.isVisible ? 'auto' : '240px')};
  overflow: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`;

export const OverviewHeader = styled.p`
  margin: 0px;
  ${fontStyleXlBold};
  color: ${colors.lightGray};
`;

export const OverviewDescription = styled.p`
  margin: 0px;
  ${fontStyleSmNormal};
  color: ${colors.lightGray};
`;

export const OverviewButton = styled.button`
  width: 64px;
  padding: 4px 8px;
  border: 2px solid ${colors.lightBlue};
  border-radius: 5px;
  ${fontStyleMdNormal};
  background-color: transparent;
  color: ${colors.lightBlue};
  ${flexAlignCenter};
  gap: 4px;
  transition: all 0.4s linear;

  &:active,
  &:focus,
  &:hover {
    border-color: ${colors.white};
    background-color: ${colors.lightBlue};
    color: ${colors.white};
  }
`;

export const OverviewVisibleWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, transparent 83%, ${colors.bg2} 100%);
`;
