import React from 'react';
import { useQuery } from 'react-query';

import { useLanguageContext } from '../../../../context/LanguageContext';
import { ActorServices } from '../../../../helpers/services/actorServices';
import SlickSlider from '../SlickSlider';

const ActorTvsSlider = ({ id }) => {
  const { language } = useLanguageContext();
  const { data } = useQuery(['actor tvs slider', id, language], () =>
    ActorServices.getActorTvs(id, language)
  );

  return <>{!!data ? <SlickSlider list={data} linkPath="tv-serials/serials-info" /> : null}</>;
};

export default ActorTvsSlider;
