import React from 'react';
import { useQuery } from 'react-query';

import { useLanguageContext } from '../../../../context/LanguageContext';
import { MovieServices } from '../../../../helpers/services/movieServices';
import SlickSlider from '../../../SlickSlider';

const MoviesSlider = ({ type }) => {
  const { language } = useLanguageContext();
  const { data } = useQuery([`${type} movies list`, type, language], () =>
    MovieServices.getMoviesByType(type, language)
  );

  return <>{!!data ? <SlickSlider list={data} linkPath="movie-details" /> : null}</>;
};

export default MoviesSlider;
