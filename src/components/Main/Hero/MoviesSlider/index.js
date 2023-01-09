import React from 'react';
import Slider from 'react-slick';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { getImage } from '../../../../helpers/getImage';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import {
  SliderFlexBox,
  SliderWrapper,
  SliderFlexColumn,
  SliderImage,
  SliderStar,
  SliderVotes,
  SliderLink,
  SliderDate,
  ImageLink,
  Wrapper,
} from './styles';
import { settings } from './settings';

const MoviesSlider = ({ movies }) => {
  const matches = useMediaQuery('(min-width: 576px)');

  return (
    <Wrapper>
      {!!movies ? (
        <Slider {...settings}>
          {movies.slice(0, matches ? -1 : 10).map((movie) => {
            const { release_date, id, poster_path, title, vote_average } = movie;
            return (
              <SliderWrapper key={id}>
                <ImageLink to={`/movie-details/${id}`}>
                  <SliderImage src={getImage(poster_path)} alt={title} />
                </ImageLink>

                <SliderFlexColumn>
                  <SliderFlexBox>
                    <SliderStar>
                      <FontAwesomeIcon icon={faStar} />
                    </SliderStar>
                    <SliderVotes>
                      {vote_average}
                      <span>/10</span>
                    </SliderVotes>
                  </SliderFlexBox>

                  <SliderLink to={`/movie-details/${id}`}>{title}</SliderLink>

                  <SliderDate>({dayjs(release_date).format('YYYY')})</SliderDate>
                </SliderFlexColumn>
              </SliderWrapper>
            );
          })}
        </Slider>
      ) : null}
    </Wrapper>
  );
};

export default MoviesSlider;
