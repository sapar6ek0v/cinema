import React from 'react';
import DetailsBody from './DetailsBody';
import DetailsHeader from './DetailsHeader';

const Details = ({ id, type }) => {
  return (
    <>
      <DetailsHeader id={id} type={type} />
      <DetailsBody id={id} type={type} />
    </>
  );
};

export default Details;
