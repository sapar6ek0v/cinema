import React from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import { useLanguageContext } from '../../../../context/LanguageContext';
import { ActorServices } from '../../../../helpers/services/actorServices';
import Loader from '../../../Loader';
import { NoFoundTitle } from '../../../styles';
import SlickSlider from '../SlickSlider';

const ActorTvsSlider = ({ id }) => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const { data, isLoading } = useQuery(['actor tvs slider', id, language], () =>
    ActorServices.getActorTvs(id, language)
  );

  return (
    <>
      {!isLoading ? (
        !!data?.length ? (
          <SlickSlider list={data} linkPath="tv-show-details" />
        ) : (
          <NoFoundTitle>{t('actorDetails.notFoundTvShowTitle')}</NoFoundTitle>
        )
      ) : (
        <Loader fixedCenter />
      )}
    </>
  );
};

export default ActorTvsSlider;
