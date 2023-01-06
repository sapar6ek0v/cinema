import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { idGenerator } from '../../../helpers/idGenerator';
import { Group, Title, ViewLink, Button } from '../../styles';
import { PopularTvsGroup, PopularTvsWrapper } from './styles';
import TvsSlider from './TvsSlider';

const PopularTvs = () => {
  const { t } = useTranslation();
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

  const buttonTypes = [
    {
      id: idGenerator(),
      type: 'popular',
      title: t('tvShow.popular'),
    },
    {
      id: idGenerator(),
      type: 'on_the_air',
      title: t('tvShow.onTheAir'),
    },
    {
      id: idGenerator(),
      type: 'top_rated',
      title: t('tvShow.topRated'),
    },
  ];

  return (
    <PopularTvsWrapper>
      <Group position="space-between" gap={20}>
        <Title>{t('dashboard.tvTitle')}</Title>
        <ViewLink to={`/tv-show-details?type=${type}`}>{t('dashboard.viewAll')}</ViewLink>
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
