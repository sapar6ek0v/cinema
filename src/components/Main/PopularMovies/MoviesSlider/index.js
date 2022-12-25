import React from 'react';
import { useQuery } from 'react-query';

import { MovieServices } from '../../../../helpers/services/movieServices';
import SlickSlider from '../../../SlickSlider';

const MoviesSlider = ({ type }) => {
  const { data } = useQuery(`${type} movies list`, () => MovieServices.getMoviesByType(type));

  return <>{!!data ? <SlickSlider list={data} linkPath="movie-info" /> : null}</>;
};

export default MoviesSlider;
