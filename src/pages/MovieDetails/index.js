import React from 'react';
import { useParams } from 'react-router-dom';

import SEO from '../../components/SEO';
import Details from '../../components/Details';

const MovieDetails = () => {
  const { id } = useParams();

  return (
    <>
      <SEO
        title="Movie details"
        description="More information about this movie"
        name="Movie Api Project"
        type="project"
      />
      <Details id={id} type="movie" />
    </>
  );
};

export default MovieDetails;
