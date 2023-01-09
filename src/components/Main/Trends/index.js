import React from 'react';
import { useQuery } from 'react-query';

import { MovieTrendServices } from '../../../helpers/services/movieTrendServices';
import { useLanguageContext } from '../../../context/LanguageContext';
import { StyledContainer } from '../../styles';
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
        <StyledContainer>
          <Row>
            <RightSide trends={trends} />

            <div></div>
          </Row>
        </StyledContainer>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
};

export default Trends;
