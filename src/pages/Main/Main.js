import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Tizers from '../../components/Tizers/Tizers';
import SEO from '../../components/SEO';
import Hero from '../../components/Main/Hero';
import { Wrapper } from '../../components/styles';
import PopularMovies from '../../components/Main/PopularMovies';
import PopularTvs from '../../components/Main/PopularTvs';
import ActorsPopular from '../../components/Main/ActorsPopular';
import Trends from '../../components/Main/Trends';

const Main = () => {
  return (
    <>
      <SEO title="Dashboard" description="Welcome to Dashboard!" name="Movie Api Project" type="project" />
      <Hero />
      <Wrapper>
        <Container>
          <Row>
            <div className="col-md-8 pad-rt">
              <PopularMovies />
              <PopularTvs />
            </div>
            <div className="col-md-4 pad-lf">
              <ActorsPopular />
            </div>
          </Row>
        </Container>
      </Wrapper>
      <Tizers />
      <Trends />
    </>
  );
};

export default Main;
