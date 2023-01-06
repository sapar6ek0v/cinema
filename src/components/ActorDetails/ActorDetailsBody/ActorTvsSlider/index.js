import React from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import { useLanguageContext } from '../../../../context/LanguageContext';
import { ActorServices } from '../../../../helpers/services/actorServices';
import { NoFoundTitle } from '../../../styles';
import SlickSlider from '../SlickSlider';

const ActorTvsSlider = ({ id }) => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const { data } = useQuery(['actor tvs slider', id, language], () =>
    ActorServices.getActorTvs(id, language)
  );

  return (
    <>
      {!!data?.length ? (
        <SlickSlider list={data} linkPath="tv-show-details" />
      ) : (
        <NoFoundTitle>{t('actorDetails.notFoundTvShowTitle')}</NoFoundTitle>
      )}
    </>
  );
};

export default ActorTvsSlider;
