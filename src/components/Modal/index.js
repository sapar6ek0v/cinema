import React from 'react';
import { ModalContent, ModalWrapper } from './styles';

const Modal = ({ onClose, children }) => {
  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent>{children}</ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
