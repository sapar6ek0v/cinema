import React from 'react';
import { useQuery } from 'react-query';
import { useLanguageContext } from '../../../../context/LanguageContext';

import { MovieServices } from '../../../../helpers/services/movieServices';
import SlickSlider from '../../../SlickSlider';

const TvsSlider = ({ type }) => {
  const { language } = useLanguageContext();
  const { data } = useQuery([`${type} tvs list`, type, language], () =>
    MovieServices.getTvsByType(type, language)
  );

  return <>{!!data ? <SlickSlider list={data} linkPath="tv-show-details" /> : null}</>;
};

export default TvsSlider;
