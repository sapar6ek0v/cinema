import React from 'react';
import { useTranslation } from 'react-i18next';

import SEO from '../../components/SEO';
import Hero from '../../components/Main/Hero';
import PopularMovies from '../../components/Main/PopularMovies';
import PopularTvs from '../../components/Main/PopularTvs';
import ActorsPopular from '../../components/Main/ActorsPopular';
import Trends from '../../components/Main/Trends';
import Trailers from '../../components/Main/Trailers';
import { Col4, Col8, Wrapper, Row } from '../../components/Main/styles';
import { StyledContainer } from '../../components/styles';

const Main = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('main.helmetTitle')}
        description={t('main.helmetDescription')}
        name={t('main.helmetName')}
        type={t('main.helmetType')}
      />
      <Hero />
      <Wrapper>
        <StyledContainer>
          <Row>
            <Col8>
              <PopularMovies />
              <PopularTvs />
            </Col8>
            <Col4>
              <ActorsPopular />
            </Col4>
          </Row>
        </StyledContainer>
      </Wrapper>
      <Trailers />
      <Trends />
    </>
  );
};

export default Main;
