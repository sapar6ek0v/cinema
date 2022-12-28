import React from 'react';
import Modal from '../../../../Modal';

const TrailerModal = ({ videoKey, onClose }) => {
  return (
    <Modal onClose={onClose}>
      <img src={`https://www.youtube.com/embed/${videoKey}`} alt="" />
      <iframe
        width="780"
        height="615"
        src={`https://www.youtube.com/embed/${videoKey} `}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Modal>
  );
};

export default TrailerModal;
