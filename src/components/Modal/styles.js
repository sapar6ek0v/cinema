import styled from 'styled-components';
import { flexJustifyCenter } from '../../helpers/cssFragments';
import { colors } from '../../constants/colors';

export const ModalWrapper = styled.div`
  height: 100% !important;
  width: 100% !important;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: ${colors.bg};
  z-index: 4;
`;

export const ModalContent = styled.div`
  height: 100% !important;
  ${flexJustifyCenter};
`;
