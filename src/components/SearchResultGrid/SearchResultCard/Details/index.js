import React from 'react';

import { getImage } from '../../../../helpers/getImage';
import notFound from '../../../../images/not-found.jpg';
import { determinePathByMediaType } from '../../helpers/functions';
import { Image, TitleLink } from '../styles';
import { Date, ImageWrapper, Overview, Stack } from './styles';

const Details = ({ item }) => {
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

        <Overview>{item.overview || 'Don`t have any overview!'}</Overview>
      </Stack>
    </>
  );
};

export default Details;
