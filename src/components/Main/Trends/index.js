import React from 'react';
import { useQuery } from 'react-query';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { getImage } from '../../../helpers/getImage';
import { MovieTrendServices } from '../../../helpers/services/movieTrendServices';
import { useLanguageContext } from '../../../context/LanguageContext';
import cocaColaAdvertisement from '../../../images/coca-cola-advertisement.webp';
import { AdvertiseTitle } from '../../styles';
import Loader from '../../Loader';
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
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const { data: trends, isLoading } = useQuery(['daily movie trends', language], () =>
    MovieTrendServices.getDailyMovieTrends(language)
  );

  return (
    <TrendWrapper>
      {!isLoading && !!trends ? (
        <Container>
          <Row>
            <TrendColumn8 gap={30}>
              <div>
                <AdvertiseTitle>{t('main.advertisement')}</AdvertiseTitle>
                <AdvertiseImage src={cocaColaAdvertisement} alt="coca-cola-advertisement-image" />
              </div>
              <TrendFlexColumn gap={25}>
                <TrendTitle>{t('main.trendTitle')}</TrendTitle>
                {trends.slice(0, 1).map((trend) => {
                  const { id, title, release_date, overview, poster_path } = trend;
                  return (
                    <TrendBlock key={id}>
                      <TrendImage src={getImage(poster_path)} alt={title} />
                      <TrendFlexColumn gap={20}>
                        <TrendCardLink to={`/movie-details/${id}`}>{title}</TrendCardLink>
                        <TrendCardDate>{release_date}</TrendCardDate>
                        <TrendCardDesc>
                          {t('main.trendOverview')}: <span>{overview}</span>
                        </TrendCardDesc>
                      </TrendFlexColumn>
                    </TrendBlock>
                  );
                })}
                <Row>
                  {trends.slice(1, 5).map((trend) => {
                    const { id, title, release_date, overview } = trend;
                    return (
                      <TrendColumn6 key={id} gap={10}>
                        <TrendCardLink to={`/movie-details/${id}`}>{title}</TrendCardLink>
                        <TrendCardDate>{release_date}</TrendCardDate>
                        <TrendCardDesc>
                          {t('main.trendOverview')}: <span>{overview}</span>
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
      ) : (
        <Loader />
      )}
    </TrendWrapper>
  );
};

export default Trends;
