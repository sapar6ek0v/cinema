import React from 'react';
import { useParams } from 'react-router-dom';

import SEO from '../../components/SEO';
import ActorDetails from '../../components/ActorDetails';

const ActorInformation = () => {
  const { id } = useParams();

  return (
    <>
      <SEO
        title="Actor details"
        description="More information about actor"
        name="Movie Api Project"
        type="project"
      />

      <ActorDetails id={id} />
    </>
  );
};

export default ActorInformation;
