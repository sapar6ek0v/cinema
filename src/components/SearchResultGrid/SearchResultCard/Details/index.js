import React from 'react';
import { useTranslation } from 'react-i18next';

import { getImage } from '../../../../helpers/getImage';
import notFound from '../../../../images/not-found.jpg';
import { determinePathByMediaType } from '../../helpers/functions';
import { Image, TitleLink } from '../styles';
import { Date, ImageWrapper, Overview, Stack } from './styles';

const Details = ({ item }) => {
  const { t } = useTranslation();

  return (
    <>
      <ImageWrapper>
        <Image
          src={
            item.poster_path || item.backdrop_path
              ? getImage(item.poster_path || item.backdrop_path)
              : notFound
          }
          alt={item.name || item.title}
          loading="lazy"
        />
      </ImageWrapper>

      <Stack>
        <div>
          <TitleLink to={`/${determinePathByMediaType(item.media_type)}/${item.id}`}>
            {item.name || item.title}
          </TitleLink>
          <Date>{item.release_date || item.first_air_date}</Date>
        </div>

        <Overview>{item.overview || t('search.notFoundOverviewTitle')}</Overview>
      </Stack>
    </>
  );
};

export default Details;
