import React from 'react';
import dayjs from 'dayjs';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { getImage } from '../../../helpers/getImage';
import { Group } from '../../styles';
import { CardWrapper, Image, ImageWrapper, TitleLink, VoteAverage, Date, StarIcon } from './styles';

const Card = ({ item, linkPath }) => {
  return (
    <CardWrapper>
      <ImageWrapper to={`/${linkPath}/${item.id}`}>
        <Image src={getImage(item.poster_path)} alt={item.title || item.name} />
      </ImageWrapper>
      <Group gap={2}>
        <StarIcon icon={faStar} />
        <VoteAverage>
          {item.vote_average}/<span>10</span>
        </VoteAverage>
      </Group>

      <TitleLink to={`/${linkPath}/${item.id}`}>{item.title || item.name}</TitleLink>
      <Date>({dayjs(item.release_date || item.first_air_date).format('YYYY')})</Date>
    </CardWrapper>
  );
};

export default Card;
