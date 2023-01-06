import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import SEO from '../../components/SEO';
import Hero from '../../components/Main/Hero';
import PopularMovies from '../../components/Main/PopularMovies';
import PopularTvs from '../../components/Main/PopularTvs';
import ActorsPopular from '../../components/Main/ActorsPopular';
import Trends from '../../components/Main/Trends';
import Trailers from '../../components/Main/Trailers';
import { Col4, Col8, Wrapper } from '../../components/Main/styles';

const Main = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('dashboard.helmetTitle')}
        description={t('dashboard.helmetDescription')}
        name={t('dashboard.helmetName')}
        type={t('dashboard.helmetType')}
      />
      <Hero />
      <Wrapper>
        <Container>
          <Row>
            <Col8>
              <PopularMovies />
              <PopularTvs />
            </Col8>
            <Col4>
              <ActorsPopular />
            </Col4>
          </Row>
        </Container>
      </Wrapper>
      <Trailers />
      <Trends />
    </>
  );
};

export default Main;
