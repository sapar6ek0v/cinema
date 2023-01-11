import React from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import { useLanguageContext } from '../../../../context/LanguageContext';
import { ActorServices } from '../../../../helpers/services/actorServices';
import { NoFoundTitle } from '../../../styles';
import SlickSlider from '../SlickSlider';
import Loader from '../../../Loader';

const ActorMoviesSlider = ({ id }) => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const { data, isLoading } = useQuery(['actor tvs slider', id, language], () =>
    ActorServices.getActorMovies(id, language)
  );

  return (
    <>
      {!isLoading ? (
        !!data?.length ? (
          <SlickSlider list={data} linkPath="movie-details" />
        ) : (
          <NoFoundTitle>{t('actorDetails.notFoundMoviesTitle')}</NoFoundTitle>
        )
      ) : (
        <Loader fixedCenter />
      )}
    </>
  );
};

export default ActorMoviesSlider;
