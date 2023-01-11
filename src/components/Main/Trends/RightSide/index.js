import React from 'react';
import { useTranslation } from 'react-i18next';

import { getImage } from '../../../../helpers/getImage';
import cocaColaAdvertisement from '../../../../images/coca-cola-advertisement.webp';
import { AdvertiseTitle } from '../../styles';
import {
  Wrapper,
  AdvertiseImage,
  Grid,
  MainBlock,
  TrendTitle,
  TrendImage,
  TitleStack,
  TrendCardLink,
  TrendCardDate,
  TrendCard,
  TrendCardDesc,
  Stack,
} from './styles';

const RightSide = ({ trends }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div>
        <AdvertiseTitle>{t('main.advertisement')}</AdvertiseTitle>
        <AdvertiseImage src={cocaColaAdvertisement} alt="coca-cola-advertisement-image" />
      </div>

      <Stack>
        <TrendTitle>{t('main.trendTitle')}</TrendTitle>
        
        {trends.slice(0, 1).map((trend) => {
          const { id, title, release_date, overview, poster_path } = trend;
          return (
            <MainBlock key={id}>
              <TrendImage src={getImage(poster_path)} alt={title} />
              <TitleStack>
                <TrendCardLink to={`/movie-details/${id}`}>{title}</TrendCardLink>
                <TrendCardDate>{release_date}</TrendCardDate>
                <TrendCardDesc>
                  {t('main.trendOverview')}: <span>{overview}</span>
                </TrendCardDesc>
              </TitleStack>
            </MainBlock>
          );
        })}

        <Grid>
          {trends.slice(1, 5).map((trend) => {
            const { id, title, release_date, overview } = trend;
            return (
              <TrendCard key={id}>
                <TrendCardLink to={`/movie-details/${id}`}>{title}</TrendCardLink>
                <TrendCardDate>{release_date}</TrendCardDate>
                <TrendCardDesc>
                  {t('main.trendOverview')}: <span>{overview}</span>
                </TrendCardDesc>
              </TrendCard>
            );
          })}
        </Grid>
      </Stack>
    </Wrapper>
  );
};

export default RightSide;
