import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { getImage } from '../../../helpers/getImage';
import notFound from '../../../images/not-found.jpg';
import { Group } from '../../styles';
import { settings } from './settings';
import {
  SlickSliderCard,
  SlickSliderImage,
  SlickSliderImageWrapper,
  SlickSliderButton,
  SlickSliderTitle,
  SlickSliderVoteAverageStar,
  SlickSliderVoteAverageTitle,
  SlickSliderLink,
  SlickSliderWrapper,
} from './styles';

const SlickSlider = ({ list, linkPath }) => {
  const { t } = useTranslation();
  const matches = useMediaQuery('(min-width: 576px)');

  return (
    <SlickSliderWrapper>
      <Slider {...settings}>
        {list.slice(0, matches ? 11 : 6).map((item) => (
          <SlickSliderCard key={item.id}>
            <SlickSliderImageWrapper>
              <SlickSliderImage
                src={item.poster_path ? getImage(item.poster_path) : notFound}
                alt={item.title || item.name}
              />
              <SlickSliderButton>
                <SlickSliderLink to={`/${linkPath}/${item.id}`}>
                  {t('slider.readMore')} <FontAwesomeIcon icon={faAngleRight} />
                </SlickSliderLink>
              </SlickSliderButton>
            </SlickSliderImageWrapper>
            <SlickSliderTitle to={`/${linkPath}/${item.id}`}>{item.title || item.name}</SlickSliderTitle>
            <Group position="center" gap={4}>
              <SlickSliderVoteAverageStar>
                <FontAwesomeIcon icon={faStar} />
              </SlickSliderVoteAverageStar>
              <SlickSliderVoteAverageTitle>
                {item.vote_average}/<span>10</span>
              </SlickSliderVoteAverageTitle>
            </Group>
          </SlickSliderCard>
        ))}
      </Slider>
    </SlickSliderWrapper>
  );
};

export default SlickSlider;
