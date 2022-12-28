import React from 'react';
import { useQuery } from 'react-query';

import { MovieServices } from '../../../../helpers/services/movieServices';
import SlickSlider from '../../../SlickSlider';

const TvsSlider = ({ type }) => {
  const { data } = useQuery(`${type} tvs list`, () => MovieServices.getTvsByType(type));

  return <>{!!data ? <SlickSlider list={data} linkPath="tv-serials/serials-info" /> : null}</>;
};

export default TvsSlider;
