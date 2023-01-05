import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import { useLanguageContext } from '../../../context/LanguageContext';
import { MovieServices } from '../../../helpers/services/movieServices';
import Loader from '../../Loader';
import SearchForm from './SearchForm';
import MoviesSlider from './MoviesSlider';
import { HeroWrapper } from './styles';

const Hero = () => {
  const navigate = useNavigate();
  const { language } = useLanguageContext();
  const { data: movies, isLoading } = useQuery(['slider list', language], () =>
    MovieServices.getMoviesByType('now_playing', language)
  );
  const [value, setValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (!value) return;
    navigate(`/search?query=${value}`);
  };

  return (
    <HeroWrapper active={isLoading}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <SearchForm value={value} setValue={setValue} handleSubmit={onSubmit} />
          <MoviesSlider movies={movies} />
        </Container>
      )}
    </HeroWrapper>
  );
};

export default Hero;
