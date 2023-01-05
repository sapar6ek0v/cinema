import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import { getImage } from '../../../../helpers/getImage';
import notFound from '../../../../images/not-found.jpg';
import { settings } from './settings';
import {
  SlickSliderCard,
  SlickSliderImageWrapper,
  SlickSliderImage,
  ExpandMore,
  Stack,
  SlickSliderLink,
  SlickSliderVoteAverage,
  SlickSliderVoteAverageTitle,
  SlickSliderVoteAverageStar,
  SlickSliderWrapper,
} from './styles';

const SlickSlider = ({ list, linkPath }) => {
  const { t } = useTranslation();

  return (
    <SlickSliderWrapper>
      <Slider {...settings}>
        {list.map((item) => (
          <SlickSliderCard key={item.id}>
            <Stack>
              <SlickSliderImageWrapper>
                <SlickSliderImage
                  src={item.poster_path ? getImage(item.poster_path) : notFound}
                  alt={item.title}
                />
                <ExpandMore>
                  {t('actorDetails.readMore')} <FontAwesomeIcon icon={faAngleRight} />
                </ExpandMore>
              </SlickSliderImageWrapper>

              <SlickSliderLink to={`/${linkPath}/${item.id}`}>{item.title || item.name}</SlickSliderLink>

              <SlickSliderVoteAverage>
                <SlickSliderVoteAverageStar icon={faStar} />
                <SlickSliderVoteAverageTitle>
                  {item.vote_average}
                  <span>/10</span>
                </SlickSliderVoteAverageTitle>
              </SlickSliderVoteAverage>
            </Stack>
          </SlickSliderCard>
        ))}
      </Slider>
    </SlickSliderWrapper>
  );
};

export default SlickSlider;
