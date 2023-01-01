import React, { useState } from 'react';

import { Group, Title, ViewLink, Button } from '../../styles';
import { buttonTypes } from './data';
import { PopularTvsGroup, PopularTvsWrapper } from './styles';
import TvsSlider from './TvsSlider';

const PopularTvs = () => {
  const [type, setType] = useState('popular');

  const toggleContent = (value) => setType(value);

  const switchContent = (type) => {
    switch (type) {
      case 'popular':
        return <TvsSlider type="popular" />;
      case 'on_the_air':
        return <TvsSlider type="on_the_air" />;
      case 'top_rated':
        return <TvsSlider type="top_rated" />;
      default:
        return <TvsSlider type="popular" />;
    }
  };

  return (
    <PopularTvsWrapper>
      <Group position="space-between" gap={20}>
        <Title>ON TV</Title>
        <ViewLink to={`/tv-serials/serials-info?type=${type}`}>View All</ViewLink>
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
