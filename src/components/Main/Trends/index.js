import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { getImage } from '../../../helpers/getImage';
import advertise from '../../../images/advertisement-examples.webp';
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
} from './styles';
import { useQuery } from 'react-query';
import { MovieTrendServices } from '../../../helpers/services/movieTrendServices';

const Trends = () => {
  const { data: trends } = useQuery('daily movie trends', () => MovieTrendServices.getDailyMovieTrends());

  return (
    <TrendWrapper>
      <Container>
        <Row>
          <TrendFlexColumn gap={30} className="col-8 md-col-8">
            <div>
              <AdvertiseTitle>advertisement</AdvertiseTitle>
              <AdvertiseImage src={advertise} alt="advertise-image" />
            </div>
            <TrendFlexColumn gap={25}>
              <TrendTitle>LATEST MOVIES</TrendTitle>
              {trends?.slice(0, 1).map((trend) => {
                const { id, title, release_date, overview, poster_path } = trend;
                return (
                  <TrendBlock key={id}>
                    <TrendImage src={getImage(poster_path)} alt={title} />
                    <TrendFlexColumn gap={20}>
                      <TrendCardLink to={`movie-info/${id}`}>{title}</TrendCardLink>
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
                    <TrendFlexColumn key={id} gap={10} className="col-6 md-col-6">
                      <TrendCardLink to={`movie-info/${id}`}>{title}</TrendCardLink>
                      <TrendCardDate>{release_date}</TrendCardDate>
                      <TrendCardDesc>
                        Overview: <span>{overview}</span>
                      </TrendCardDesc>
                    </TrendFlexColumn>
                  );
                })}
              </Row>
            </TrendFlexColumn>
          </TrendFlexColumn>
          <div className="col-4 md-col-4"></div>
        </Row>
      </Container>
    </TrendWrapper>
  );
};

export default Trends;
