import React from 'react';
import { useQuery } from 'react-query';

import { TvServices } from '../../../../helpers/services/tvServices';
import SlickSlider from '../../../SlickSlider';

const TvsSlider = ({ type }) => {
  const { data } = useQuery(`${type} tvs list`, () => TvServices.getTvsByType(type));

  return <>{!!data ? <SlickSlider list={data} linkPath="tv-serials/serials-info" /> : null}</>;
};

export default TvsSlider;
