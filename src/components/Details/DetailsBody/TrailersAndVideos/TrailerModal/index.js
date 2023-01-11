import React from 'react';
import { YOU_TUBE_URL } from '../../../../../constants/api';
import Modal from '../../../../Modal';

const TrailerModal = ({ video, onClose }) => {
  return (
    <Modal onClose={onClose}>
      {!!video ? (
        <>
          <iframe
            width="780"
            height="615"
            src={`${YOU_TUBE_URL}/${video.key} `}
            title={video.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </>
      ) : null}
    </Modal>
  );
};

export default TrailerModal;
