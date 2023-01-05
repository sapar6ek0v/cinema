import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import SEO from '../../components/SEO';
import Details from '../../components/Details';

const MovieDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  return (
    <>
      <SEO
        title={t('movieDetails.helmetTitle')}
        description={t('movieDetails.helmetDescription')}
        name={t('movieDetails.helmetName')}
        type={t('movieDetails.helmetType')}
      />
      <Details id={id} type="movie" linkPath="movie-details" />
    </>
  );
};

export default MovieDetails;
