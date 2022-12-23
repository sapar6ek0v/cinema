import React, { useState } from 'react';
import SlickPopularFilms from '../../FilmsSlickSlider/SlickPopularFilms';
import SlickTopRated from '../../FilmsSlickSlider/SlickTopRated';
import SlickUpcoming from '../../FilmsSlickSlider/SlickUpcoming';
import { Button, Group, Title, ViewLink } from '../../styles';
import { buttonTypes } from './data';
import { PopularMoviesWrapper, PopularMoviesGroup } from './styles';

const PopularMovies = () => {
  const [type, setType] = useState('popular');

  const toggleContent = (type) => setType(type);

  const switchContent = (type) => {
    switch (type) {
      case 'popular':
        return <SlickPopularFilms />;
      case 'coming-soon':
        return <SlickUpcoming />;
      case 'top-rated':
        return <SlickTopRated />;
      default:
        return <SlickPopularFilms />;
    }
  };

  return (
    <PopularMoviesWrapper>
      <Group position="space-between" gap={20}>
        <Title>IN THEATER</Title>
        <ViewLink to={'/all-films'}>View All</ViewLink>
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
