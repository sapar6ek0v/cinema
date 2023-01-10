import React from 'react';
import { useQuery } from 'react-query';
import { Container } from 'react-bootstrap';

import { MovieTrendServices } from '../../../helpers/services/movieTrendServices';
import { useLanguageContext } from '../../../context/LanguageContext';
import Loader from '../../Loader';
import { Row } from '../styles';
import { Wrapper } from './styles';
import RightSide from './RightSide';

const Trends = () => {
  const { language } = useLanguageContext();
  const { data: trends, isLoading } = useQuery(['daily movie trends', language], () =>
    MovieTrendServices.getDailyMovieTrends(language)
  );

  return (
    <Wrapper>
      {!isLoading && !!trends ? (
        <Container>
          <Row>
            <RightSide trends={trends} />

            <div></div>
          </Row>
        </Container>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
};

export default Trends;
