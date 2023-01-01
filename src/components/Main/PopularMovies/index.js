import React, { useState } from 'react';

import { Button, Group, Title, ViewLink } from '../../styles';
import { buttonTypes } from './data';
import MoviesSlider from './MoviesSlider';
import { PopularMoviesWrapper, PopularMoviesGroup } from './styles';

const PopularMovies = () => {
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

  return (
    <PopularMoviesWrapper>
      <Group position="space-between" gap={20}>
        <Title>IN THEATER</Title>
        <ViewLink to={`/movies?type=${type}`}>View All</ViewLink>
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
