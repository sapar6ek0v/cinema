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
  max-height: ${(props) => (props.isVisible ? '300px' : 'auto')};
  overflow: ${(props) => (props.isVisible ? 'hidden' : 'visible')};
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
  padding: 4px 8px;
  border: 2px solid ${colors.white};
  background: ${colors.lightBlue};
  ${fontStyleMdNormal};
  color: ${colors.white};
  ${flexAlignCenter};
  gap: 4px;
  transition: all 0.4s linear;

  &:active,
  &:focus,
  &:hover {
    border-color: ${colors.lightBlue};
    background: transparent;
    color: ${colors.lightBlue};
  }
`;

export const OverviewVisibleWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, transparent 80%, ${colors.lightBlue} 100%);
`;
