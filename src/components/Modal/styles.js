import styled from 'styled-components';
import { flexJustifyCenter } from '../../helpers/cssFragments';

export const ModalWrapper = styled.div`
  height: 100% !important;
  width: 100% !important;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
  height: 100% !important;
  ${flexJustifyCenter};
`;
