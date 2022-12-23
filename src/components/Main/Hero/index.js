import React from 'react';
import { Container } from 'react-bootstrap';
import TopSearch from '../../SeacrhFilms/TopSearch';
import MoviesSlider from './MoviesSlider';
import { HeroWrapper } from './styles';

const Hero = () => {
  return (
    <HeroWrapper className="hero">
      <Container>
        <TopSearch />
        <MoviesSlider />
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
