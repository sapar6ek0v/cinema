import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { getImage } from '../../helpers/getImage';
import notFound from '../../images/not-found.jpg';
import { Group } from '../styles';
import { settings } from './settings';
import {
  SlickSliderCard,
  SlickSliderImage,
  SlickSliderImageWrapper,
  SlickSliderLink,
  SlickSliderTitle,
  SlickSliderVoteAverageStar,
  SlickSliderVoteAverageTitle,
} from './styles';

const SlickSlider = ({ list, linkPath }) => {
  return (
    <Slider {...settings}>
      {list.slice(0, 11).map((item) => (
        <SlickSliderCard key={item.id}>
          <SlickSliderImageWrapper>
            <SlickSliderImage
              src={item.poster_path ? getImage(item.poster_path) : notFound}
              alt={item.title || item.name}
            />
            <SlickSliderLink to={`/${linkPath}/${item.id}`}>
              Read more <FontAwesomeIcon icon={faAngleRight} />
            </SlickSliderLink>
          </SlickSliderImageWrapper>
          <SlickSliderTitle to={`/${linkPath}/${item.id}`}>{item.title || item.name}</SlickSliderTitle>
          <Group position="center" gap={4}>
            <SlickSliderVoteAverageStar>
              <FontAwesomeIcon icon={faStar} />
            </SlickSliderVoteAverageStar>
            <SlickSliderVoteAverageTitle>
              {item.vote_average}
              <span>/10</span>
            </SlickSliderVoteAverageTitle>
          </Group>
        </SlickSliderCard>
      ))}
    </Slider>
  );
};

export default SlickSlider;
