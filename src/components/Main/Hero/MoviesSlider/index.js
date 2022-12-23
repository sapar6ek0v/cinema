import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { getImage } from '../../../../helpers/getImage';
import {
  SliderFlexBox,
  SliderWrapper,
  SliderFlexColumn,
  SliderImage,
  SliderStar,
  SliderVotes,
  SliderTitle,
  SliderDate,
} from './styles';

const MoviesSlider = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [directory, setDirectory] = useState(0);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=4eb03517df3f1b8227a751b8d89d9ee8&language=ru&&page=1`
    ).then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1204,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 448,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNavigate = (e, id) => {
    if (Math.abs(e.clientX - directory) < 5) {
      navigate(`/movie-info/${id}`);
    }
  };

  return (
    <Slider {...settings}>
      {movies.map((movie) => {
        const { release_date, id, poster_path, title, vote_average } = movie;
        return (
          <SliderWrapper key={id} onMouseDown={(e) => setDirectory(e)} onClick={(e) => handleNavigate(e, id)}>
            <SliderImage src={getImage(poster_path)} alt={title} />

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

              <SliderTitle>{title}</SliderTitle>

              <SliderDate>({dayjs(release_date).format('YYYY')})</SliderDate>
            </SliderFlexColumn>
          </SliderWrapper>
        );
      })}
    </Slider>
  );
};

export default MoviesSlider;
