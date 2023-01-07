import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { idGenerator } from '../../../helpers/idGenerator';
import { Button, Group, Title, ViewLink } from '../../styles';
import MoviesSlider from './MoviesSlider';
import { PopularMoviesWrapper, PopularMoviesGroup } from './styles';

const PopularMovies = () => {
  const { t } = useTranslation();
  const [type, setType] = useState('popular');

  const toggleContent = (value) => setType(value);

  const switchContent = (type) => {
    switch (type) {
      case 'popular':
        return <MoviesSlider type="popular" />;
      case 'upcoming':
        return <MoviesSlider type="upcoming" />;
      case 'top_rated':
        return <MoviesSlider type="top_rated" />;
      default:
        return <MoviesSlider type="popular" />;
    }
  };

  const buttonTypes = [
    {
      id: idGenerator(),
      type: 'popular',
      title: t('movie.popular'),
    },
    {
      id: idGenerator(),
      type: 'upcoming',
      title: t('movie.upcoming'),
    },
    {
      id: idGenerator(),
      type: 'top_rated',
      title: t('movie.topRated'),
    },
  ];

  return (
    <PopularMoviesWrapper>
      <Group position="space-between" gap={20}>
        <Title>{t('main.movieTitle')}</Title>
        <ViewLink to={`/movies?type=${type}`}>{t('main.viewAll')}</ViewLink>
      </Group>
      <PopularMoviesGroup>
        {buttonTypes.map((button) => (
          <Button key={button.id} onClick={() => toggleContent(button.type)} active={button.type === type}>
            #{button.title}
          </Button>
        ))}
      </PopularMoviesGroup>
      {switchContent(type)}
    </PopularMoviesWrapper>
  );
};

export default PopularMovies;
