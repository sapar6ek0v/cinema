import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import SearchForm from '../../SearchForm';
import MoviesSlider from './MoviesSlider';
import { HeroWrapper } from './styles';

const Hero = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (!value) return;
    navigate(`/search-films/${value}`);
  };

  return (
    <HeroWrapper className="hero">
      <Container>
        <SearchForm value={value} setValue={setValue} handleSubmit={onSubmit} />
        <MoviesSlider />
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
