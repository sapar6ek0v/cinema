import React from 'react';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import { useLanguageContext } from '../../../../context/LanguageContext';
import { getImage } from '../../../../helpers/getImage';
import { RecommendationServices } from '../../../../helpers/services/recommendationServices';
import { ContentFlexContainer, ContentWrapper, SliderContainer, Title } from '../styles';
import { CardWrapper, Image, ImageWrapperLink, TitleGroup, TitleLink, VoteAverage } from './styles';
import { NoFoundTitle } from '../../../styles';

const Recommendations = ({ type, id, linkPath }) => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const { data: recommendations } = useQuery([`${type} recommendation list`, id, type, language], () =>
    RecommendationServices.getRecommendationsById(type, id, language)
  );

  return (
    <ContentWrapper>
      <Container>
        <ContentFlexContainer>
          <Title>#{t('details.recommendationTitle')}</Title>
          <SliderContainer>
            {!!recommendations?.length ? (
              recommendations.map((recommendation) => (
                <CardWrapper key={recommendation.id}>
                  <ImageWrapperLink to={`/${linkPath}/${recommendation.id}`}>
                    <Image src={getImage(recommendation.poster_path)} alt={recommendation.title} />
                  </ImageWrapperLink>

                  <TitleGroup>
                    <TitleLink to={`/${linkPath}/${recommendation.id}`}>
                      {recommendation.title || recommendation.name}
                    </TitleLink>
                    <VoteAverage>{(recommendation.vote_average * 10).toFixed(0)}%</VoteAverage>
                  </TitleGroup>
                </CardWrapper>
              ))
            ) : (
              <NoFoundTitle>{t('details.notFoundRecommendationTitle')}</NoFoundTitle>
            )}
          </SliderContainer>
        </ContentFlexContainer>
      </Container>
    </ContentWrapper>
  );
};

export default Recommendations;
