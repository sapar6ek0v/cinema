import React from 'react';
import { useQuery } from 'react-query';
import { Container, Row } from 'react-bootstrap';

import { getImage } from '../../../helpers/getImage';
import { MovieTrendServices } from '../../../helpers/services/movieTrendServices';
import { useLanguageContext } from '../../../context/LanguageContext';
import cocaColaAdvertisement from '../../../images/coca-cola-advertisement.webp';
import { AdvertiseTitle } from '../../styles';
import {
  AdvertiseImage,
  TrendWrapper,
  TrendFlexColumn,
  TrendTitle,
  TrendBlock,
  TrendImage,
  TrendCardLink,
  TrendCardDate,
  TrendCardDesc,
  TrendColumn6,
  TrendColumn8,
} from './styles';

const Trends = () => {
  const { language } = useLanguageContext();
  const { data: trends } = useQuery(['daily movie trends', language], () =>
    MovieTrendServices.getDailyMovieTrends(language)
  );

  return (
    <TrendWrapper>
      <Container>
        <Row>
          <TrendColumn8 gap={30}>
            <div>
              <AdvertiseTitle>advertisement</AdvertiseTitle>
              <AdvertiseImage src={cocaColaAdvertisement} alt="coca-cola-advertisement-image" />
            </div>
            <TrendFlexColumn gap={25}>
              <TrendTitle>LATEST MOVIES</TrendTitle>
              {trends?.slice(0, 1).map((trend) => {
                const { id, title, release_date, overview, poster_path } = trend;
                return (
                  <TrendBlock key={id}>
                    <TrendImage src={getImage(poster_path)} alt={title} />
                    <TrendFlexColumn gap={20}>
                      <TrendCardLink to={`/movie-details/${id}`}>{title}</TrendCardLink>
                      <TrendCardDate>{release_date}</TrendCardDate>
                      <TrendCardDesc>
                        Overview: <span>{overview}</span>
                      </TrendCardDesc>
                    </TrendFlexColumn>
                  </TrendBlock>
                );
              })}
              <Row>
                {trends?.slice(1, 5).map((trend) => {
                  const { id, title, release_date, overview } = trend;
                  return (
                    <TrendColumn6 key={id} gap={10}>
                      <TrendCardLink to={`/movie-details/${id}`}>{title}</TrendCardLink>
                      <TrendCardDate>{release_date}</TrendCardDate>
                      <TrendCardDesc>
                        Overview: <span>{overview}</span>
                      </TrendCardDesc>
                    </TrendColumn6>
                  );
                })}
              </Row>
            </TrendFlexColumn>
          </TrendColumn8>
          <div className="col-4 md-col-4"></div>
        </Row>
      </Container>
    </TrendWrapper>
  );
};

export default Trends;
