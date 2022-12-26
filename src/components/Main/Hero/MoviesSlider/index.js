import React from 'react';
import Slider from 'react-slick';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { MovieServices } from '../../../../helpers/services/movieServices';
import { getImage } from '../../../../helpers/getImage';
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
} from './styles';
import { settings } from './settings';

const MoviesSlider = () => {
  const { data: movies } = useQuery('slider list', () => MovieServices.getMoviesByType('now_playing'));

  return (
    <Slider {...settings}>
      {movies?.map((movie) => {
        const { release_date, id, poster_path, title, vote_average } = movie;
        return (
          <SliderWrapper key={id}>
            <ImageLink to={`/movie-info/${id}`}>
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

              <SliderLink to={`/movie-info/${id}`}>{title}</SliderLink>

              <SliderDate>({dayjs(release_date).format('YYYY')})</SliderDate>
            </SliderFlexColumn>
          </SliderWrapper>
        );
      })}
    </Slider>
  );
};

export default MoviesSlider;