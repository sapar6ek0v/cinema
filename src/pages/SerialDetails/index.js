import React from 'react';
import { useParams } from 'react-router-dom';

import SEO from '../../components/SEO';
import Details from '../../components/Details';

const SerialDetails = () => {
  const { id } = useParams();

  return (
    <>
      <SEO
        title="Serial details"
        description="More information about this serial"
        name="Movie Api Project"
        type="project"
      />
      <Details id={id} type="tv" />
    </>
  );
};

export default SerialDetails;
