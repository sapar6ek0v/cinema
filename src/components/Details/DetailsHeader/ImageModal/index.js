import React from 'react';

import { getImage } from '../../../../helpers/getImage';
import Modal from '../../../Modal';
import { Image } from './styles';

const ImageModal = ({ onClose, path, alt }) => {
  return (
    <Modal onClose={onClose}>
      <Image src={getImage(path)} alt={alt} loading="lazy" />
    </Modal>
  );
};

export default ImageModal;
