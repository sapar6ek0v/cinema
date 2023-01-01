import React from 'react';
import DetailsBody from './DetailsBody';
import DetailsHeader from './DetailsHeader';

const Details = ({ id, type, linkPath }) => {
  return (
    <>
      <DetailsHeader id={id} type={type} />
      <DetailsBody id={id} type={type} linkPath={linkPath} />
    </>
  );
};

export default Details;
