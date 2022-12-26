import React, { useState } from 'react';

import { Group, Title, ViewLink, Button } from '../../styles';
import { buttonTypes } from './data';
import { PopularTvsGroup, PopularTvsWrapper } from './styles';
import TvsSlider from './TvsSlider';

const PopularTvs = () => {
  const [type, setType] = useState('popular');

  const toggleContent = (type) => setType(type);

  const switchContent = (type) => {
    switch (type) {
      case 'popular':
        return <TvsSlider type="popular" />;
      case 'on-the-air':
        return <TvsSlider type="on_the_air" />;
      case 'top-rated':
        return <TvsSlider type="top_rated" />;
      default:
        return <TvsSlider type="popular" />;
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
