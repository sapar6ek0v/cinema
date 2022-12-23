import React, { useState } from 'react';
import TvOnTheAir from '../../../pages/Tv/TVOnTheAir';
import TvPopular from '../../../pages/Tv/TVPopular';
import TvTopRated from '../../../pages/Tv/TVTopRated';
import { Group, Title, ViewLink, Button } from '../../styles';
import { buttonTypes } from './data';
import { PopularTvsGroup, PopularTvsWrapper } from './styles';

const PopularTvs = () => {
  const [type, setType] = useState('popular');

  const toggleContent = (type) => setType(type);

  const switchContent = (type) => {
    switch (type) {
      case 'popular':
        return <TvPopular />;
      case 'on-the-air':
        return <TvOnTheAir />;
      case 'top-rated':
        return <TvTopRated />;
      default:
        return <TvPopular />;
    }
  };
  return (
    <PopularTvsWrapper>
      <Group position="space-between" gap={20}>
        <Title>ON TV</Title>
        <ViewLink to={'/all-films'}>View All</ViewLink>
      </Group>
      <PopularTvsGroup>
        {buttonTypes.map((button) => (
          <Button key={button.id} onClick={() => toggleContent(button.type)} active={button.type === type}>
            #{button.title}
          </Button>
        ))}
      </PopularTvsGroup>
      {switchContent(type)}
    </PopularTvsWrapper>
  );
};

export default PopularTvs;
