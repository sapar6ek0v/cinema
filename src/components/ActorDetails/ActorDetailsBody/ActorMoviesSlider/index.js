import React from 'react';
import { useQuery } from 'react-query';

import { useLanguageContext } from '../../../../context/LanguageContext';
import { ActorServices } from '../../../../helpers/services/actorServices';
import SlickSlider from '../SlickSlider';

const ActorMoviesSlider = ({ id }) => {
  const { language } = useLanguageContext();
  const { data } = useQuery(['actor tvs slider', id, language], () =>
    ActorServices.getActorMovies(id, language)
  );

  return <>{!!data ? <SlickSlider list={data} linkPath="movie-info" /> : null}</>;
};

export default ActorMoviesSlider;
